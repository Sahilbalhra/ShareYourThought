import {
  Arg,
  Authorized,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { User, UserModel } from "../enitities";
import { signInUserInput, UserInput } from "../inputs";
import bcrypt from "bcrypt";
import { SignInUserResponse } from "../responses";
import jwt from "jsonwebtoken";
import { AuthenticatedAppContext } from "../types/AppContext";

@Resolver(User)
export class UserResolver {
  @Mutation(() => User)
  async signUpUser(
    @Arg("input", () => UserInput) input: UserInput
  ): Promise<User> {
    const { firstName, lastName, email, password, confirmPassword } = input;
    if (password != confirmPassword) {
      throw new Error("Password and Confirm Password must be the same");
    }
    try {
      console.log("user input", input);
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        throw new Error("User with this email already exists");
      }
      const hashPassword = await bcrypt.hash(password, 12);
      const name = firstName + " " + lastName;
      const user = await UserModel.create({
        name,
        email,
        password: hashPassword,
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  @Mutation(() => SignInUserResponse)
  async signInUser(
    @Arg("input", () => signInUserInput) input: signInUserInput
  ): Promise<SignInUserResponse> {
    const { email, password } = input;
    // console.log("Input:",input)
    try {
      const existingUser = await UserModel.findOne({ email });
      if (!existingUser) {
        throw new Error("User with this email does not exists ");
      }
      if (!(await bcrypt.compare(password, existingUser?.password))) {
        throw new Error("Please enter correct credentials!");
      }
      const token = jwt.sign({ userId: existingUser?._id }, "Secret_Key", {
        expiresIn: "1h",
      });
      // console.log("Token :",token)
      return { token };
    } catch (error) {
      throw error;
    }
  }

  @Query(() => User)
  @Authorized()
  async getUser(@Ctx() { userId }: AuthenticatedAppContext): Promise<User> {
    // console.log("userId:", userId);
    try {
      const user = await UserModel.findById(userId);
      if (!user) {
        throw new Error("User is not authenticated");
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
}
