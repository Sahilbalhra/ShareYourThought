import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class SignInUserResponse {
  @Field() token?: string;
}