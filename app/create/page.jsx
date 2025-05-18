"use client";

import { Suspense } from "react";

import PostBox from "@/components/Post/PostBox";

export default function PostPage() {
  return (
    <>
      <Suspense>
        <PostBox />
      </Suspense>
    </>
  );
}
