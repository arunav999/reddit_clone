🧵 Reddit Clone with Next.js, StepZen, and Supabase
A minimal Reddit-style app built with:

&#8226; Next.js App Router

&#8226; StepZen for GraphQL API

&#8226; Supabase as the PostgreSQL backend

&#8226; Dynamic Routing for subreddit and post pages

🔧 Features
&#8226; View all posts or posts by subreddit

&#8226; Uses dynamic routes: /[subreddit] and /[postid]

&#8226; Body is shown only on the single post page

🗂 Folder Structure
app/ – App router pages

&#8226; components/FeedPost.jsx – Displays each post (conditionally shows body)

&#8226; graphql/queries.js – All GraphQL queries
