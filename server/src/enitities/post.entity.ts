import { Schema, model } from "mongoose";
import { Field, ObjectType } from "type-graphql";
import { User } from "./user.entity";

export interface IPost {
  _id: string;
  creatorId: string;
  title: string;
  description: string;
  likes?: string[];
  comments?: string[];
  createdAt: Date;
  updatedAt: Date;
}

@ObjectType()
export class Post implements IPost {
  @Field() _id!: string;
  @Field() creatorId: string;
  @Field() title!: string;
  @Field() description!: string;
  @Field(() => [String], { nullable: true }) likes?: string[];
  @Field(() => [String], { nullable: true }) comments?: string[];
  @Field(() => Date) createdAt!: Date;
  @Field(() => Date) updatedAt!: Date;
}

@ObjectType()
export class ExtendedPost extends Post {
  @Field(() => User) User: User;
}

export const postSchema = new Schema(
  {
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    likes: {
      type: [String],
      required: false,
      default: [],
    },
    comments: {
      type: [String],
      required: false,
      default: [],
    },
  },
  { timestamps: true }
);

export const postModel = model<Post>("posts", postSchema);
