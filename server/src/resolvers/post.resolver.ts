import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Post, ExtendedPost, postModel } from "../enitities";
import { PostInput, UpdatePostInput } from "../inputs";
import mongoose from "mongoose";
import { AuthenticatedAppContext } from "../types/AppContext";
@Resolver(Post)
export class PostResolver {
  @Mutation(() => Post)
  @Authorized()
  async createPost(
    @Arg("input", () => PostInput) input: PostInput,
    @Ctx() { userId }: AuthenticatedAppContext
  ): Promise<Post> {
    const { title, description, likes, comments } = input;
    try {
      const creatorId = userId;
      const post = await postModel.create({
        title,
        description,
        likes,
        comments,
        creatorId,
      });
      return post;
    } catch (error) {
      throw error;
    }
  }

  @Query(() => [ExtendedPost])
  async getAllPost(): Promise<ExtendedPost[]> {
    try {
      const posts = await postModel.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "creatorId",
            foreignField: "_id",
            as: "User",
          },
        },
        {
          $unwind: "$User",
        },
      ]);
      if (posts?.length == 0) {
        throw new Error("Posts not found!");
      }
      return posts;
    } catch (error) {
      throw error;
    }
  }

  @Query(() => ExtendedPost)
  async getPost(
    @Arg("id", () => String) id: String | any
  ): Promise<ExtendedPost> {
    try {
      const post = await postModel.aggregate([
        {
          $match: { _id: new mongoose.Types.ObjectId(id) },
        },
        {
          $lookup: {
            from: "users",
            localField: "creatorId",
            foreignField: "_id",
            as: "User",
          },
        },
        {
          $unwind: "$User",
        },
      ]);

      if (!post) {
        throw new Error("Post does not exists");
      }
      return post[0];
    } catch (error) {
      throw error;
    }
  }

  @Mutation(() => String)
  @Authorized()
  async deletePost(@Arg("id", () => String) id: String | any): Promise<String> {
    try {
      const post = await postModel.findById(id);
      if (!post) {
        throw new Error("Post does not exist");
      }
      await postModel.deleteOne({ _id: id });
      return "Post have been deleted successfully";
    } catch (error) {
      throw error;
    }
  }

  @Mutation(() => String)
  @Authorized()
  async updatePost(
    @Arg("input", () => UpdatePostInput) input: UpdatePostInput
  ): Promise<String> {
    const { _id } = input;
    try {
      const post = await postModel.findById(_id);
      if (!post) {
        throw new Error("Post does not exists");
      }
      await postModel.findByIdAndUpdate(_id, { ...input }, { new: true });
      return "Post have been updated";
    } catch (error) {
      throw error;
    }
  }
}
