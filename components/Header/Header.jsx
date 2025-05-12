import Link from "next/link";
import Image from "next/image";

import redditLogo from "@/public/Reddit-Logo.png";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <Link href="">
          <div className={classes["image-container"]}>
            <Image src={redditLogo} alt="Reddit logo" className="image" />
            <span>reddit</span>
          </div>
        </Link>

        <div className={classes.search}>
          <span>Search Icon</span>
          <input type="text" placeholder="Search Reddit" />
        </div>

        <div className={classes.user}>
          <button className={classes.login}>Log In</button>
          <span className={classes.more}>...</span>
          {/* dynamic */}

          {/* <Link href="">
            <span>plus icon</span>
            <span>Create</span>
          </Link>

          <Link href="">
            <span>notification icon</span>
          </Link>

          <Link href="">
            <span>user</span>
            <span>Online-green dot</span>
          </Link> */}
        </div>
      </header>
    </>
  );
}
