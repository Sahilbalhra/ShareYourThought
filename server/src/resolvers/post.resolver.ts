import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Post, ExtendedPost, postModel } from "../enitities";
import { CommentPostInput, PostInput, UpdatePostInput } from "../inputs";
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
    // const userId = "6367ced01c20af8a758835db";
    const { title, description, tags, likes, comments, picUrl } = input;
    try {
      const creatorId = userId;
      const post = await postModel.create({
        title,
        description,
        tags,
        likes,
        picUrl,
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
  async getPost(@Arg("id", () => String) id: String): Promise<ExtendedPost> {
    try {
      const _id = id + "";
      const post = await postModel.aggregate([
        {
          $match: { _id: new mongoose.Types.ObjectId(_id) },
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
    console.log("input:", input);
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

  @Mutation(() => String)
  @Authorized()
  async likePost(
    @Arg("id", () => String) id: String,
    @Ctx() { userId }: AuthenticatedAppContext
  ) {
    try {
      const existingPost = await postModel.findById(id);
      if (!existingPost) {
        throw new Error("Post does not exist");
      }
      if (existingPost?.likes?.find((id) => id == userId)) {
        existingPost.likes = existingPost?.likes.filter((id) => id != userId);
        await postModel.findByIdAndUpdate(
          id,
          { likes: existingPost?.likes },
          { new: true }
        );
        return "Post have been unliked";
      } else {
        if (existingPost?.likes) {
          existingPost?.likes.push(String(userId));
        }
        await postModel.findByIdAndUpdate(
          id,
          { likes: existingPost?.likes },
          { new: true }
        );
        return "Post have been liked";
      }
    } catch (error) {
      throw error;
    }
  }

  @Mutation(() => String)
  @Authorized()
  async commentPost(
    @Arg("input", () => CommentPostInput) input: CommentPostInput
    // @Ctx() { userId }: AuthenticatedAppContext
  ) {
    const { id, comment } = input;
    try {
      const existingPost = await postModel.findById(id);
      if (!existingPost) {
        throw new Error("Post does not exist");
      }

      if (existingPost?.comments) {
        existingPost?.comments.push(String(comment));
      }
      await postModel.findByIdAndUpdate(
        id,
        { comments: existingPost?.comments },
        { new: true }
      );
      return "Post have been liked";
    } catch (error) {
      throw error;
    }
  }
}
