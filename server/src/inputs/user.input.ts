import { Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
  @Field() firstName!: string;
  @Field() lastName!: string;
  @Field() email!: string;
  @Field() password!: string;
  @Field() confirmPassword!: string;
}

@InputType()
export class signInUserInput{
    @Field() email!: string;
    @Field() password!: string;
}
