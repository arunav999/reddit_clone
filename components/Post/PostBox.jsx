"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

import post from "./PostBox.module.css";

export default function PostBox() {
  const { data: session } = useSession();

  const searchParams = useSearchParams();
  const search = searchParams.get("type");

  const [filename, setFileName] = useState("Upload media");
  const [error, setError] = useState();

  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

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

  return (
    <>
      <div className={post.post}>
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
              <Link
                href="?type=LINK"
                className={`${search === "LINK" ? post.active : null}`}
              >
                Link
              </Link>
            </div>

            <section className={post.section}>
              <form
                onSubmit={handleSubmit((data) => {
                  console.log(data);
                })}
              >
                <div className={post["input-size"]}>
                  <div className={post.input}>
                    <input
                      type="text"
                      placeholder="Title*"
                      {...register("title", {
                        required: "This field is required",
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

                {search === "TEXT" && (
                  <div className={post.body}>
                    <textarea
                      {...register("body")}
                      id=""
                      placeholder="Body text (optional)"
                    ></textarea>
                  </div>
                )}

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
                        <CloudArrowUpIcon className="h-8 w-8 cursor-pointer" />
                      </button>
                    </div>
                  </div>
                )}

                {search === "LINK" && (
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
                )}

                <div className={post.button}>
                  <button type="submit">Post</button>
                </div>
              </form>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
