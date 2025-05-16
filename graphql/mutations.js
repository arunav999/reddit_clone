import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation MyMutation(
    $title: String!
    $body: String!
    $image: String!
    $username: String!
    $subreddit_id: ID!
  ) {
    addPost(
      title: $title
      body: $body
      image: $image
      username: $username
      subreddit_id: $subreddit_id
    ) {
      id
      created_at
      title
      body
      image
      username
      subreddit_id
    }
  }
`;

export const ADD_SUBREDDIT = gql`
  mutation MyMutation($topic: String!) {
    addSubreddit(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;
