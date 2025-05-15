"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { HomeIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

import nav from "./Sidebar.module.css";

export default function Sidebar() {
  const href = "/";
  const path = usePathname();
  const isActive = href === path ? nav.active : null;

  return (
    <>
      <nav className={nav.nav}>
        <div className={nav["nav-bar"]}>
          <ul>
            <li className={isActive}>
              <Link href="/" className={nav.link}>
                <HomeIcon className={nav.icon} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="" className={nav.link}>
                <ArrowTrendingUpIcon className={nav.icon} />
                <span>Popular</span>
              </Link>
            </li>
            {/* <li>
              <Link href="" className={nav.link}>
                <span>icon</span>
                <span>Answers</span>
              </Link>
            </li>
            <li>
              <Link href="" className={nav.link}>
                <span>icon</span>
                <span>Explore</span>
              </Link>
            </li> */}
            {/* <li>{path}</li> */}
          </ul>
        </div>

        <details className={nav.communities}>
          <summary>
            <span>Communities</span>
            <ChevronDownIcon className={nav.icon} />
          </summary>
          <p>Create</p>
          <p>com1</p>
          <p>com2</p>
        </details>

        {/* NAVBAR ICON */}
        <div className={nav["nav-bar-icon"]}>
          <Bars3Icon className={nav.icon} />
        </div>
      </nav>
    </>
  );
}
