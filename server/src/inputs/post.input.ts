import { Field, InputType } from "type-graphql";

@InputType()
export class PostInput {
  @Field() title!: string;
  @Field() description!: string;
  @Field(() => [String],{ nullable: true }) likes?: [string];
  @Field(() => [String],{ nullable: true }) comments?: [string];
}
