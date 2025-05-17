"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import FeedPost from "./FeedPost";
import { GET_ALL_POSTS, GET_POSTS_BY_TOPIC } from "@/graphql/queries";

export default function RedditFeed({ topic }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const toastId = toast.loading("Loading posts...");

      try {
        const query = topic ? GET_POSTS_BY_TOPIC : GET_ALL_POSTS;
        const variables = topic ? { topic } : {};

        const res = await fetch("/api/stepzen", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query, variables }),
          cache: "no-store",
        });

        const json = await res.json();

        const postsData = topic
          ? json.data?.getPostListByTopic || []
          : json.data?.getPostList || [];

        setPosts(postsData);
        toast.success("Posts loaded", { id: toastId });
      } catch (error) {
        toast.error("Failed to load posts", { id: toastId });
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [topic]);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <>
      {posts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </>
  );
}
