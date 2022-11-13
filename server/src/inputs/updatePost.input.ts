import { Field, InputType } from "type-graphql";

@InputType()
export class UpdatePostInput {
    @Field() _id!: string;
  @Field({ nullable: true }) title?: string;
  @Field({ nullable: true }) creatorId?: string;
  @Field({ nullable: true }) picUrl?: string;
  @Field({ nullable: true }) description?: string;
  @Field(() => [String], { nullable: true }) likes?: [string];
  @Field(() => [String], { nullable: true }) comments?: [string];
}
