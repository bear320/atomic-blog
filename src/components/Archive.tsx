import { useState } from "react";
import { usePosts } from "../hooks/usePosts";

const Archive = () => {
  const { onAddPost, onCreateRandomPost } = usePosts();

  const [posts] = useState(
    Array.from({ length: 50 }, () => onCreateRandomPost())
  );

  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside>
      <h2>Post archive</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, idx) => (
            <li key={idx}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => onAddPost(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default Archive;
