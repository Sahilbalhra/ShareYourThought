import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type ExtendedPost = {
  __typename?: 'ExtendedPost';
  User: User;
  _id: Scalars['String'];
  comments?: Maybe<Array<Scalars['String']>>;
  createdAt: Scalars['DateTime'];
  creatorId: Scalars['String'];
  description: Scalars['String'];
  likes?: Maybe<Array<Scalars['String']>>;
  picUrl: Scalars['String'];
  tags?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  deletePost: Scalars['String'];
  signInUser: SignInUserResponse;
  signUpUser: User;
  updatePost: Scalars['String'];
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};


export type MutationSignInUserArgs = {
  input: SignInUserInput;
};


export type MutationSignUpUserArgs = {
  input: UserInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};

export type Post = {
  __typename?: 'Post';
  _id: Scalars['String'];
  comments?: Maybe<Array<Scalars['String']>>;
  createdAt: Scalars['DateTime'];
  creatorId: Scalars['String'];
  description: Scalars['String'];
  likes?: Maybe<Array<Scalars['String']>>;
  picUrl: Scalars['String'];
  tags?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PostInput = {
  comments?: InputMaybe<Array<Scalars['String']>>;
  description: Scalars['String'];
  likes?: InputMaybe<Array<Scalars['String']>>;
  picUrl: Scalars['String'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Greet: Scalars['String'];
  getAllPost: Array<ExtendedPost>;
  getPost: ExtendedPost;
  getUser: User;
};


export type QueryGetPostArgs = {
  id: Scalars['String'];
};

export type SignInUserResponse = {
  __typename?: 'SignInUserResponse';
  token: Scalars['String'];
};

export type UpdatePostInput = {
  _id: Scalars['String'];
  comments?: InputMaybe<Array<Scalars['String']>>;
  creatorId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  likes?: InputMaybe<Array<Scalars['String']>>;
  picUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type SignInUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type PostFragment = { __typename?: 'Post', _id: string, creatorId: string, title: string, tags?: Array<string> | null, picUrl: string, description: string, likes?: Array<string> | null, comments?: Array<string> | null, createdAt: any, updatedAt: any };

export type UserFragment = { __typename?: 'User', _id: string, name: string, email: string };

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', _id: string, creatorId: string, title: string, tags?: Array<string> | null, picUrl: string, description: string, likes?: Array<string> | null, comments?: Array<string> | null, createdAt: any, updatedAt: any } };

export type SignUpUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser: { __typename?: 'User', _id: string, name: string, email: string } };

export type GetAllPostQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostQuery = { __typename?: 'Query', getAllPost: Array<{ __typename?: 'ExtendedPost', _id: string, creatorId: string, title: string, tags?: Array<string> | null, picUrl: string, description: string, likes?: Array<string> | null, comments?: Array<string> | null, createdAt: any, updatedAt: any, User: { __typename?: 'User', _id: string, name: string, email: string } }> };

export const PostFragmentDoc = gql`
    fragment Post on Post {
  _id
  creatorId
  title
  tags
  picUrl
  description
  likes
  comments
  createdAt
  updatedAt
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  _id
  name
  email
}
    `;
export const CreatePostDocument = gql`
    mutation CreatePost($input: PostInput!) {
  createPost(input: $input) {
    ...Post
  }
}
    ${PostFragmentDoc}`;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const SignUpUserDocument = gql`
    mutation SignUpUser($input: UserInput!) {
  signUpUser(input: $input) {
    _id
    name
    email
  }
}
    `;
export type SignUpUserMutationFn = Apollo.MutationFunction<SignUpUserMutation, SignUpUserMutationVariables>;

/**
 * __useSignUpUserMutation__
 *
 * To run a mutation, you first call `useSignUpUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpUserMutation(baseOptions?: Apollo.MutationHookOptions<SignUpUserMutation, SignUpUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, options);
      }
export type SignUpUserMutationHookResult = ReturnType<typeof useSignUpUserMutation>;
export type SignUpUserMutationResult = Apollo.MutationResult<SignUpUserMutation>;
export type SignUpUserMutationOptions = Apollo.BaseMutationOptions<SignUpUserMutation, SignUpUserMutationVariables>;
export const GetAllPostDocument = gql`
    query GetAllPost {
  getAllPost {
    _id
    creatorId
    title
    tags
    picUrl
    description
    likes
    comments
    createdAt
    updatedAt
    User {
      _id
      name
      email
    }
  }
}
    `;

/**
 * __useGetAllPostQuery__
 *
 * To run a query within a React component, call `useGetAllPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPostQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostQuery, GetAllPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostQuery, GetAllPostQueryVariables>(GetAllPostDocument, options);
      }
export function useGetAllPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostQuery, GetAllPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostQuery, GetAllPostQueryVariables>(GetAllPostDocument, options);
        }
export type GetAllPostQueryHookResult = ReturnType<typeof useGetAllPostQuery>;
export type GetAllPostLazyQueryHookResult = ReturnType<typeof useGetAllPostLazyQuery>;
export type GetAllPostQueryResult = Apollo.QueryResult<GetAllPostQuery, GetAllPostQueryVariables>;