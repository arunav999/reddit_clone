"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import feedDesign from "@/components/Feed/FeedPost.module.css";

export default function NotFound() {
  const pathName = usePathname();

  return (
    <div className="flex h-screen items-center justify-center text-center">
      <div className={feedDesign.feed}>
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg">
          The page {pathName} you're looking for doesn't exist.
        </p>
        <Link href="/">Go back to home</Link>
      </div>
    </div>
  );
}
