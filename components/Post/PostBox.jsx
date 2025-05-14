"use client";

import { useSession } from "next-auth/react";

export default function PostBox() {
  const { data: session } = useSession();

  return (
    <>
      <form>
        <div>
          <input
            disabled={!session}
            type="text"
            placeholder={session ? "Create a post" : "Log In to post"}
          />
        </div>
      </form>
    </>
  );
}
