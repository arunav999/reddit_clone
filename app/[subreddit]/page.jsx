import RedditFeed from "@/components/Feed/RedditFeed";

export default function SubredditPage({ params }) {
  const topic = params.subreddit.startsWith("r/")
    ? params.subreddit.slice(2)
    : params.subreddit;

  return (
    <section>
      <h1 className="text-xl font-bold mb-4">Posts in r/{topic}</h1>
      <RedditFeed topic={topic} />
    </section>
  );
}
