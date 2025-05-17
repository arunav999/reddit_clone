"use client";

import { useEffect, useState } from "react";

import { GET_ALL_POSTS } from "@/graphql/queries";

import Post from "./FeedPost";

export default function RedditFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/stepzen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: GET_ALL_POSTS }),
      });

      const json = await res.json();
      setPosts(json.data?.getPostList || []);
    };

    fetchPosts();
  }, []);

  return (
    <>
      {/* {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))} */}
      <Post/>
    </>
  );
}
