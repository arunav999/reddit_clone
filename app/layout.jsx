import "./globals.css";

export const metadata = {
  title: "Reddit_Clone",
  description: "This is a reddit_clone app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
