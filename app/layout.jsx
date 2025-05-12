import "./globals.css";

import Providers from "./providers";

export const metadata = {
  title: "Reddit_Clone",
  description: "This is a reddit_clone app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
