import { useState } from "react";
import { usePosts } from "../hooks/usePosts";

const Main = () => {
  const { posts, onAddPost } = usePosts();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && body) {
      onAddPost({ title, body });
      setTitle("");
      setBody("");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />
        <button type="submit">Add post</button>
      </form>

      <section>
        <ul>
          {posts.map((post, idx) => (
            <li key={idx}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
