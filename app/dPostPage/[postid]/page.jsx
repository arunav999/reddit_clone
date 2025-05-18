import RedditFeed from "@/components/Feed/RedditFeed";
import { use } from "react";

import feedDesign from "@/components/Feed/FeedPost.module.css";

export default function PostPage({ params }) {
  const { postid } = use(params);

  return (
    <section className={feedDesign.feed}>
      <h1 className="text-2xl font-bold mb-6">Post Details</h1>
      <RedditFeed postId={postid} />
    </section>
  );
}
