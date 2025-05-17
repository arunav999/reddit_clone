"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { GET_ALL_POSTS } from "@/graphql/queries";
import FeedPost from "./FeedPost";

export default function RedditFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const loadingToast = toast.loading("Loading posts...");

      try {
        const res = await fetch("/api/stepzen", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: GET_ALL_POSTS }),
        });

        const json = await res.json();
        setPosts(json.data?.getPostList || []);

        toast.success("Posts loaded successfully!", { id: loadingToast });
      } catch (error) {
        toast.error("Failed to load posts", { id: loadingToast });
      }
    };

    fetchPosts();
  }, []);

  // console.log(posts);

  return (
    <>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">Loading posts...</p>
      ) : (
        posts.map((post) => <FeedPost key={post.id} post={post} />)
      )}
    </>
  );
}
