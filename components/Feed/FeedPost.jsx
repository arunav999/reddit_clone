import TimeAgo from "react-timeago";

import Link from "next/link";

import feed from "./FeedPost.module.css";

import {
  EllipsisHorizontalIcon,
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
  ChatBubbleOvalLeftIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export default function FeedPost({ post }) {
  return (
    <>
      <article className={feed.article}>
        <div className={feed.container}>
          <div className={feed["post-details"]}>
            <div className={feed.details}>
              <Link href="">
                <span className={feed.uid}>
                  r/{post.subreddit[0]?.topic} &#8226;
                </span>
              </Link>

              <Link href="">
                <span>
                  Posted by u/
                  {post.username} &#8226;
                </span>
              </Link>

              <span className={feed["time-ago"]}>
                <TimeAgo date={post.created_at} />
              </span>
            </div>

            <div className={feed.more}>
              <span>
                <EllipsisHorizontalIcon className="h-8 w-8 cursor-pointer" />
              </span>
            </div>
          </div>

          <div className={feed["title-head"]}>
            <Link href="" className={feed["title-link"]}>
              <p className={feed.title}>{post.title}</p>
            </Link>
          </div>

          {post.image !== null && post.image !== "" ? (
            <div className={feed.image}>
              <img src={post.image} alt={post.title} className="" />
            </div>
          ) : (
            <div className={feed.body}>
              <p>{post.body}</p>
            </div>
          )}

          <div className={feed.cta}>
            <div className={feed["vote-btns"]}>
              <button className={feed.upvote}>
                <span>
                  <ArrowUpCircleIcon className="h-9 w-9" />
                </span>
              </button>
              <span className={feed.count}>0</span>
              <button className={feed.downvote}>
                <span>
                  <ArrowDownCircleIcon className="h-9 w-9" />
                </span>
              </button>
            </div>

            <div className={feed.comments}>
              <Link href="">
                <span className={feed["comment-icon"]}>
                  <ChatBubbleOvalLeftIcon className="h-9 w-9" />
                </span>
                <span className={feed["comment-count"]}>
                  {post.comments?.length}
                </span>
              </Link>
            </div>

            <div className={feed.share}>
              <span className={feed["share-icon"]}>
                <ArrowTopRightOnSquareIcon className="h-9 w-9" />
              </span>
              <span className={feed["share-text"]}>share</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
