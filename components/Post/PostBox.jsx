"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

import { useRef } from "react";

import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

import post from "./PostBox.module.css";

export default function PostBox() {
  const { data: session } = useSession();

  const fileInputRef = useRef(null);

  function handleUploadFile(event) {
    event.preventDefault();
    const files = fileInputRef.current.click();

    return files;
  }

  return (
    <>
      <div className={post.post}>
        <main className={post.main}>
          <div className={post.head}>
            <h1>Create Post</h1>
          </div>

          <div className={post.content}>
            <div className={post.link}>
              <Link href="">Text</Link>
              <Link href="">Images & Video</Link>
              <Link href="">Link</Link>
            </div>

            <section className={post.section}>
              <form action="">
                <div className={post["input-size"]}>
                  <div className={post.input}>
                    <input type="text" placeholder="Title*" />
                  </div>
                  <div className={post.length}>
                    <p>Error message</p>
                    <span>0/300</span>
                  </div>
                </div>

                <div className={post.body}>
                  <textarea
                    name=""
                    id=""
                    placeholder="Body text (optional)"
                  ></textarea>
                </div>

                <div className={post.upload}>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*,video*"
                  />
                  <div className={post["upload-button"]}>
                    <p>Upload media</p>
                    <button onClick={handleUploadFile} type="button">
                      <CloudArrowUpIcon className="h-8 w-8 cursor-pointer" />
                    </button>
                  </div>
                </div>

                <div className={post.button}>
                  <button>Post</button>
                </div>
              </form>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
