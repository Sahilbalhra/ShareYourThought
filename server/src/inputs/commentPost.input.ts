import { Field, InputType } from "type-graphql";

@InputType()
export class CommentPostInput {
  @Field() id!: string;
  @Field() comment!: string;
}
