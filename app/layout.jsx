import "./globals.css";

import Header from "@/components/Header/Header";
import Sidebar from "@/components/Nav/Sidebar";

export const metadata = {
  title: "Reddit_Clone",
  description: "This is a reddit_clone app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
