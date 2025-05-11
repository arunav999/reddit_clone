import Link from "next/link";
import Image from "next/image";

import redditLogo from "@/public/Reddit-Logo.png";

export default function Header() {
  return (
    <>
      <header className="flex justify-between pl-2 pr-2">
        <div>
          <Link href="/" className="flex items-center">
            <Image src={redditLogo} alt="Reddit-Logo" className="h-15 w-15" />
            <span className="self-center">reddit</span>
          </Link>
        </div>

        <div>
          <input type="text" placeholder="search" />
        </div>

        <div>
          <p>Multiple items</p>
        </div>
      </header>
    </>
  );
}
