import Link from "next/link";
import Image from "next/image";

import feed from "./post.module.css";

import {
  EllipsisHorizontalIcon,
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
  ChatBubbleOvalLeftIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

import defaultFemaleImg from "@/public/defaultFemaleImg.png";

export default function Post() {
  return (
    <>
      <article className={feed.article}>
        <div className={feed.container}>
          <div className={feed["post-details"]}>
            <div className={feed.details}>
              <span className={feed.uid}>UID</span>

              <span className={feed.dot}>.</span>

              <span className={feed["time-ago"]}>time ago</span>
            </div>

            <div className={feed.more}>
              <span>
                <EllipsisHorizontalIcon className="h-8 w-8 cursor-pointer" />
              </span>
            </div>
          </div>

          <div className={feed["title-head"]}>
            <Link href="" className={feed["title-link"]}>
              <p className={feed.title}>Title of the post</p>
            </Link>
          </div>

          <div className={feed.image}>
            <Image src={defaultFemaleImg} alt="" />
          </div>

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
                <span className={feed["comment-count"]}>15</span>
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
