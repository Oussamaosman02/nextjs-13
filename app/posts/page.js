import { use } from "react";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default function page() {
  const posts = use(getPosts());
  return (
    <div>
      <h2>Posts</h2>
      <h3>This page renders posts</h3>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h4>{post.title}</h4>
              <br />
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
