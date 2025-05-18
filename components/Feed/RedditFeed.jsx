// "use client";

// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import FeedPost from "./FeedPost";
// import { GET_ALL_POSTS, GET_POSTS_BY_TOPIC } from "@/graphql/queries";

// export default function RedditFeed({ topic }) {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const toastId = toast.loading("Loading posts...");

//       try {
//         const query = topic ? GET_POSTS_BY_TOPIC : GET_ALL_POSTS;
//         const variables = topic ? { topic } : {};

//         const res = await fetch("/api/stepzen", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ query, variables }),
//           cache: "no-store",
//         });

//         const json = await res.json();

//         const postsData = topic
//           ? json.data?.getPostListByTopic || []
//           : json.data?.getPostList || [];

//         setPosts(postsData);
//         toast.success("Posts loaded", { id: toastId });
//       } catch (error) {
//         toast.error("Failed to load posts", { id: toastId });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, [topic]);

//   if (loading) {
//     return <p>Loading posts...</p>;
//   }

//   if (posts.length === 0) {
//     return <p>No posts found.</p>;
//   }

//   return (
//     <>
//       {posts.map((post) => (
//         <FeedPost key={post.id} post={post} />
//       ))}
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import {
  GET_ALL_POSTS,
  GET_POSTS_BY_TOPIC,
  GET_POST_BY_ID,
} from "@/graphql/queries";

import FeedPost from "./FeedPost";

export default function RedditFeed({ topic, postId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      toast.loading("Loading posts...");

      let query = GET_ALL_POSTS;
      let variables = {};

      if (postId) {
        query = GET_POST_BY_ID;
        variables = { post_id: postId };
      } else if (topic) {
        query = GET_POSTS_BY_TOPIC;
        variables = { topic };
      }

      try {
        const res = await fetch("/api/stepzen", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query,
            variables,
          }),
        });

        const json = await res.json();

        if (postId) {
          setPosts(
            json.data?.getPostListByPostId
              ? [json.data.getPostListByPostId]
              : []
          );
        } else if (topic) {
          setPosts(json.data?.getPostListByTopic || []);
        } else {
          setPosts(json.data?.getPostList || []);
        }

        toast.dismiss();
        toast.success("Posts loaded successfully");
      } catch (error) {
        toast.dismiss();
        toast.error("Failed to load posts");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [topic, postId]);

  if (loading) return <p>Loading posts...</p>;
  if (!posts.length) return <p>No posts found.</p>;

  return (
    <>
      {posts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </>
  );
}
