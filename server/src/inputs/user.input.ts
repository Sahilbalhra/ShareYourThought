import { Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
  @Field() name!: string;
  @Field() email!: string;
  @Field() password!: string;
}

@InputType()
export class signInUserInput{
    @Field() email!: string;
    @Field() password!: string;
}
