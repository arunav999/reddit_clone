import "./globals.css";

import Header from "@/components/Header/Header";
import Sidebar from "@/components/Nav/Sidebar";
import Providers from "./providers";

export const metadata = {
  title: "Reddit_Clone",
  description: "This is a reddit_clone app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <div className="flex min-h-screen">
            <Sidebar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
