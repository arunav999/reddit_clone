import Header from "@/components/Header/Header";
import Sidebar from "@/components/Nav/Sidebar";
import PostBox from "@/components/Post/PostBox";

import RedditFeed from "@/components/Feed/RedditFeed";
import feed from "@/components/Feed/RedditFeed.module.css";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      {/* <Sidebar /> */}
      {/* <PostBox /> */}
      <div className={feed.feed}>
        <RedditFeed />
      </div>
    </>
  );
}
