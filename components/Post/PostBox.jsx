"use client";

import toast from "react-hot-toast";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

import post from "./PostBox.module.css";

import { ADD_POST, ADD_SUBREDDIT } from "@/graphql/mutations";
import { GET_SUBREDDIT_BY_TOPIC } from "@/graphql/queries";

export default function PostBox() {
  const { data: session } = useSession();

  const searchParams = useSearchParams();
  const search = searchParams.get("type");

  const [filename, setFileName] = useState("Upload media");

  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  function handleFileNameChange(event) {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  }

  function handleUploadFile(event) {
    event.preventDefault();
    const files = fileInputRef.current.click();

    return files;
  }

  const onSubmit = handleSubmit(async (formData) => {
    const notification = toast.loading("Creating new post...");

    try {
      const subredditRes = await fetch("/api/stepzen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: GET_SUBREDDIT_BY_TOPIC,
          variables: { topic: formData.subreddit },
        }),
      });

      const subredditData = await subredditRes.json();
      const getSubredditListByTopic =
        subredditData.data.getSubredditListByTopic;

      let subreddit_id;

      if (getSubredditListByTopic.length === 0) {
        const createSubredditRes = await fetch("/api/stepzen", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: ADD_SUBREDDIT,
            variables: { topic: formData.subreddit },
          }),
        });

        const createSubredditData = await createSubredditRes.json();
        subreddit_id = createSubredditData.data.addSubreddit.id;
      } else {
        subreddit_id = getSubredditListByTopic[0].id;
      }

      const image = formData.image || formData.link;

      const createPostRes = await fetch("/api/stepzen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ADD_POST,
          variables: {
            body: formData.body,
            image: image,
            subreddit_id: subreddit_id,
            title: formData.title,
            username: session?.user?.name,
          },
        }),
      });

      // const createPostData = await createPostRes.json();
      // console.log("New post added:", createPostData.data.addPost);

      setValue("subreddit", "");
      setValue("title", "");
      setValue("body", "");
      setValue("link", "");
      setValue("image", "");

      toast.success("New post created", {
        id: notification,
      });
    } catch (error) {
      console.error(error);
      toast.error("Whoops something went wrong!", {
        id: notification,
      });
    }
  });

  return (
    <>
      {session ? (
        <div className={post.post}>
          <button onClick={signOut}>Sign Out</button>
          <main className={post.main}>
            <div className={post.head}>
              <h1>Create Post</h1>
            </div>

            <div className={post.content}>
              <div className={post.link}>
                <Link
                  href="?type=TEXT"
                  className={`${search === "TEXT" ? post.active : null}`}
                >
                  Text
                </Link>
                <Link
                  href="?type=IMAGE"
                  className={`${search === "IMAGE" ? post.active : null}`}
                >
                  Images & Video
                </Link>
                {/* <Link
                href="?type=LINK"
                className={`${search === "LINK" ? post.active : null}`}
              >
                Link
              </Link> */}
              </div>

              <section className={post.section}>
                <form onSubmit={onSubmit}>
                  {/* SUB-REDDIT */}
                  <div className={post["input-size"]}>
                    <div className={post.input}>
                      <input
                        type="text"
                        placeholder="Subreddit*"
                        {...register("subreddit", {
                          required: "Subreddit is required",
                          minLength: {
                            value: 3,
                            message: "The minimum length is 3",
                          },
                        })}
                      />
                    </div>
                    <div className={post.length}>
                      <p className={post.error}>
                        {errors.subreddit?.message !== undefined &&
                          errors.subreddit?.message}
                      </p>
                    </div>
                  </div>

                  {/* INPUT-TITLE */}
                  <div className={post["input-size"]}>
                    <div className={post.input}>
                      <input
                        type="text"
                        placeholder="Title*"
                        {...register("title", {
                          required: "Title is required",
                          minLength: {
                            value: 3,
                            message: "The minimum length is 3",
                          },
                        })}
                      />
                    </div>
                    <div className={post.length}>
                      <p className={post.error}>
                        {errors.title?.message !== undefined &&
                          errors.title?.message}
                      </p>
                      <span>0/300</span>
                    </div>
                  </div>

                  {/* IMAGE / VIDEO LINK */}
                  <div className={post["input-size"]}>
                    <div className={post.input}>
                      <input
                        type="text"
                        placeholder="Link*"
                        {...register("link", {
                          required: "The image/video link is required!",
                        })}
                      />
                    </div>
                    <div className={post.length}>
                      <p className={post.error}>
                        {errors.link?.message !== undefined &&
                          errors.link?.message}
                      </p>
                    </div>
                  </div>

                  {/* BODY */}
                  {search === "TEXT" && (
                    <div className={post.body}>
                      <textarea
                        {...register("body")}
                        id=""
                        placeholder="Body text (optional)"
                      ></textarea>
                    </div>
                  )}

                  {/* IMAGE / VIDEO UPLOAD */}
                  {search === "IMAGE" && (
                    <div className={post.upload}>
                      <input
                        type="file"
                        disabled
                        {...register("image")}
                        ref={fileInputRef}
                        accept="image/*,video*"
                        onChange={handleFileNameChange}
                      />
                      <div className={post["upload-button"]}>
                        <p>{filename}</p>
                        <button onClick={handleUploadFile} type="button">
                          <CloudArrowUpIcon className="h-8 w-8 cursor-nodrop" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* SUBMIT POST BUTTON */}
                  <div
                    className={`${post.button} ${
                      watch("title") && watch("subreddit") ? post.active : null
                    }`}
                  >
                    <button type="submit">Post</button>
                  </div>
                </form>
              </section>
            </div>
          </main>
        </div>
      ) : (
        <div>Login to Post</div>
      )}
    </>
  );
}
