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

export type CommentPostInput = {
  comment: Scalars['String'];
  id: Scalars['String'];
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
  commentPost: Scalars['String'];
  createPost: Post;
  deletePost: Scalars['String'];
  likePost: Scalars['String'];
  searchPost: Array<Post>;
  signInUser: SignInUserResponse;
  signUpUser: User;
  updatePost: Scalars['String'];
};


export type MutationCommentPostArgs = {
  input: CommentPostInput;
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};


export type MutationLikePostArgs = {
  id: Scalars['String'];
};


export type MutationSearchPostArgs = {
  search: Scalars['String'];
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
  tags?: InputMaybe<Array<Scalars['String']>>;
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
  confirmPassword: Scalars['String'];
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

export type CommentPostMutationVariables = Exact<{
  input: CommentPostInput;
}>;


export type CommentPostMutation = { __typename?: 'Mutation', commentPost: string };

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', _id: string, creatorId: string, title: string, tags?: Array<string> | null, picUrl: string, description: string, likes?: Array<string> | null, comments?: Array<string> | null, createdAt: any, updatedAt: any } };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: string };

export type LikePostMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type LikePostMutation = { __typename?: 'Mutation', likePost: string };

export type SearchPostMutationVariables = Exact<{
  search: Scalars['String'];
}>;


export type SearchPostMutation = { __typename?: 'Mutation', searchPost: Array<{ __typename?: 'Post', _id: string, creatorId: string, title: string, tags?: Array<string> | null, picUrl: string, description: string, likes?: Array<string> | null, comments?: Array<string> | null, createdAt: any, updatedAt: any }> };

export type SignInUserMutationVariables = Exact<{
  input: SignInUserInput;
}>;


export type SignInUserMutation = { __typename?: 'Mutation', signInUser: { __typename?: 'SignInUserResponse', token: string } };

export type SignUpUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser: { __typename?: 'User', _id: string, name: string, email: string } };

export type UpdatePostMutationVariables = Exact<{
  input: UpdatePostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: string };

export type GetAllPostQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostQuery = { __typename?: 'Query', getAllPost: Array<{ __typename?: 'ExtendedPost', _id: string, creatorId: string, title: string, tags?: Array<string> | null, picUrl: string, description: string, likes?: Array<string> | null, comments?: Array<string> | null, createdAt: any, updatedAt: any, User: { __typename?: 'User', _id: string, name: string, email: string } }> };

export type GetPostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPostQuery = { __typename?: 'Query', getPost: { __typename?: 'ExtendedPost', _id: string, creatorId: string, title: string, tags?: Array<string> | null, picUrl: string, description: string, likes?: Array<string> | null, comments?: Array<string> | null, createdAt: any, updatedAt: any, User: { __typename?: 'User', _id: string, name: string, email: string } } };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', _id: string, name: string, email: string } };

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
export const CommentPostDocument = gql`
    mutation CommentPost($input: CommentPostInput!) {
  commentPost(input: $input)
}
    `;
export type CommentPostMutationFn = Apollo.MutationFunction<CommentPostMutation, CommentPostMutationVariables>;

/**
 * __useCommentPostMutation__
 *
 * To run a mutation, you first call `useCommentPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommentPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commentPostMutation, { data, loading, error }] = useCommentPostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCommentPostMutation(baseOptions?: Apollo.MutationHookOptions<CommentPostMutation, CommentPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CommentPostMutation, CommentPostMutationVariables>(CommentPostDocument, options);
      }
export type CommentPostMutationHookResult = ReturnType<typeof useCommentPostMutation>;
export type CommentPostMutationResult = Apollo.MutationResult<CommentPostMutation>;
export type CommentPostMutationOptions = Apollo.BaseMutationOptions<CommentPostMutation, CommentPostMutationVariables>;
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
export const DeletePostDocument = gql`
    mutation DeletePost($id: String!) {
  deletePost(id: $id)
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const LikePostDocument = gql`
    mutation LikePost($id: String!) {
  likePost(id: $id)
}
    `;
export type LikePostMutationFn = Apollo.MutationFunction<LikePostMutation, LikePostMutationVariables>;

/**
 * __useLikePostMutation__
 *
 * To run a mutation, you first call `useLikePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likePostMutation, { data, loading, error }] = useLikePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLikePostMutation(baseOptions?: Apollo.MutationHookOptions<LikePostMutation, LikePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikePostMutation, LikePostMutationVariables>(LikePostDocument, options);
      }
export type LikePostMutationHookResult = ReturnType<typeof useLikePostMutation>;
export type LikePostMutationResult = Apollo.MutationResult<LikePostMutation>;
export type LikePostMutationOptions = Apollo.BaseMutationOptions<LikePostMutation, LikePostMutationVariables>;
export const SearchPostDocument = gql`
    mutation SearchPost($search: String!) {
  searchPost(search: $search) {
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
}
    `;
export type SearchPostMutationFn = Apollo.MutationFunction<SearchPostMutation, SearchPostMutationVariables>;

/**
 * __useSearchPostMutation__
 *
 * To run a mutation, you first call `useSearchPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSearchPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [searchPostMutation, { data, loading, error }] = useSearchPostMutation({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchPostMutation(baseOptions?: Apollo.MutationHookOptions<SearchPostMutation, SearchPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SearchPostMutation, SearchPostMutationVariables>(SearchPostDocument, options);
      }
export type SearchPostMutationHookResult = ReturnType<typeof useSearchPostMutation>;
export type SearchPostMutationResult = Apollo.MutationResult<SearchPostMutation>;
export type SearchPostMutationOptions = Apollo.BaseMutationOptions<SearchPostMutation, SearchPostMutationVariables>;
export const SignInUserDocument = gql`
    mutation SignInUser($input: signInUserInput!) {
  signInUser(input: $input) {
    token
  }
}
    `;
export type SignInUserMutationFn = Apollo.MutationFunction<SignInUserMutation, SignInUserMutationVariables>;

/**
 * __useSignInUserMutation__
 *
 * To run a mutation, you first call `useSignInUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInUserMutation, { data, loading, error }] = useSignInUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInUserMutation(baseOptions?: Apollo.MutationHookOptions<SignInUserMutation, SignInUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInUserMutation, SignInUserMutationVariables>(SignInUserDocument, options);
      }
export type SignInUserMutationHookResult = ReturnType<typeof useSignInUserMutation>;
export type SignInUserMutationResult = Apollo.MutationResult<SignInUserMutation>;
export type SignInUserMutationOptions = Apollo.BaseMutationOptions<SignInUserMutation, SignInUserMutationVariables>;
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
export const UpdatePostDocument = gql`
    mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input)
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
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
export const GetPostDocument = gql`
    query GetPost($id: String!) {
  getPost(id: $id) {
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
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const GetUserDocument = gql`
    query GetUser {
  getUser {
    _id
    name
    email
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;