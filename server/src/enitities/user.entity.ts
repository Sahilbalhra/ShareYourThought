import { model, Schema } from "mongoose";
import { Field, ObjectType } from "type-graphql";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

@ObjectType()
export class User implements IUser {
  @Field() _id!: string;
  @Field() name!: string;
  @Field() email!: string;
  @Field() password!: string;
  @Field(() => Date) createdAt!: Date;
  @Field(() => Date) updatedAt!: Date;
}

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<User>("user", UserSchema);
