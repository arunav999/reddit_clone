"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";
import {
  XCircleIcon,
  EllipsisHorizontalIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

import redditLogo from "@/public/Reddit-Logo.png";
import defaultFemaleImg from "@/public/defaultFemaleImg.png";
import defaultMaleImg from "@/public/defaultMaleImg.png";
import classes from "./Header.module.css";

export default function Header() {
  const { data: session } = useSession();

  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  function handleClose() {
    setValue("");
    setIsFocused(false);
    inputRef.current.blur();
  }

  return (
    <>
      <header className={classes.header}>
        {/* reddit home */}
        <Link href="/">
          <div className={classes["image-container"]}>
            <Image src={redditLogo} alt="Reddit logo" className="image" />
            <span>reddit</span>
          </div>
        </Link>

        {/* reddit search bar */}
        <div
          className={`${classes.search} ${
            isFocused ? classes["is-focus"] : null
          }`}
        >
          <MagnifyingGlassIcon className="h-8 w-8" />
          <input
            type="text"
            value={value}
            ref={inputRef}
            placeholder="Search Reddit"
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              if (document.activeElement !== inputRef.current) {
                setIsFocused(false);
              }
            }}
          />
          {(isFocused || value) && (
            <XCircleIcon
              className="h-8 w-8 cursor-pointer"
              onClick={handleClose}
            />
          )}
        </div>

        {/* reddit user login */}

        <div className={classes.user}>
          {session ? (
            <>
              <button className={classes.login} onClick={() => signIn()}>
                Log In
              </button>
              <EllipsisHorizontalIcon className={classes.more} />
            </>
          ) : (
            <>
              {/* reddit user logout */}
              <div className={classes.create}>
                <Link href="/create">
                  <PlusIcon className={classes["create-icon"]} />
                  <span>Create</span>
                </Link>
              </div>

              <div className={classes.notification}>
                <Link href="">
                  <BellIcon className={classes.bell} />
                </Link>
              </div>

              <div className={classes.profile}>
                <button>
                  <Image src={defaultFemaleImg} alt="" />
                  {/* <span>Online-green dot</span> */}
                </button>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
