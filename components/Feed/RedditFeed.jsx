import Link from "next/link";
import Image from "next/image";

import feed from "./RedditFeed.module.css";

export default function RedditFeed() {
  return (
    <>
      <article className={feed.article}>
        <div className={feed.container}>
          <Link href="" className={feed["main-link"]}>
            <div className={feed["post-details"]}>
              <div className={feed.details}>
                <span className={feed.uid}>UID</span>

                <span className={feed.dot}>dot .</span>

                <span className={feed["time-ago"]}>time ago</span>
              </div>

              <div className={feed.more}>
                <span>...</span>
              </div>
            </div>

            <div className={feed["title-head"]}>
              <Link href="" className={feed["title-link"]}>
                <p className={feed.title}>Title of the post</p>
              </Link>
            </div>

            <div className={feed.image}>
              <Image />
            </div>

            <div className={feed.cta}>
              <div className={feed["vote-btns"]}>
                <button className={feed.upvote}>
                  <span>svg upvote icon</span>
                </button>
                <span className={feed.count}>0</span>
                <button className={feed.downvote}>
                  <span>svg downvote icon</span>
                </button>
              </div>

              <div className={feed.comments}>
                <Link href="">
                  <span className={feed["comment-icon"]}>
                    svg share icon for comment
                  </span>
                  <span className={feed["comment-count"]}>
                    15 no of comments
                  </span>
                </Link>
              </div>

              <div className={feed.share}>
                <span className={feed["share-icon"]}>svg icon for share</span>
                <span className={feed["share-text"]}>share</span>
              </div>
            </div>
          </Link>
        </div>
      </article>
    </>
  );
}
