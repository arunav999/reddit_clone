"use client";
import { useSession, signOut } from "next-auth/react";

import classes from "./Sidebar.module.css";

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <>
      {/* <span>Sidebar</span> */}
      <span>{session?.user?.name}</span>
      {session && <button onClick={() => signOut()}>Log Out</button>}
    </>
  );
}
