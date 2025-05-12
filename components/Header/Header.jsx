import Link from "next/link";
import Image from "next/image";

import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";
import {
  XCircleIcon,
  EllipsisHorizontalIcon,
  BellIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";

import redditLogo from "@/public/Reddit-Logo.png";
import defaultFemaleImg from "@/public/defaultFemaleImg.png";
import defaultMaleImg from "@/public/defaultMaleImg.png";
import classes from "./Header.module.css";

export default function Header() {
  let login = true;

  return (
    <>
      <header className={classes.header}>
        <Link href="/">
          <div className={classes["image-container"]}>
            <Image src={redditLogo} alt="Reddit logo" className="image" />
            <span>reddit</span>
          </div>
        </Link>

        <div className={classes.search}>
          <MagnifyingGlassIcon className={classes.icon} />
          <input type="text" placeholder="Search Reddit" />
          <XCircleIcon className={classes.icon} />
        </div>

        <div className={classes.user}>
          {!login ? (
            <>
              <button className={classes.login}>Log In</button>
              <EllipsisHorizontalIcon className={classes.more} />{" "}
            </>
          ) : (
            <>
              <div className={classes.create}>
                <Link href="">
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
                <Link href="">
                  <Image
                    src={login ? defaultMaleImg : defaultFemaleImg}
                    alt=""
                  />
                  {/* <span>Online-green dot</span> */}
                </Link>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
