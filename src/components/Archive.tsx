import { useState, memo } from "react";
// import { usePosts } from "../hooks/usePosts";
import { Post } from "../types";
import { faker } from "@faker-js/faker";

const createRandomPost = (): Post => {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
};

const Archive = ({
  archiveOptions,
  onAddPost,
}: {
  archiveOptions: { show: boolean; title: string };
  onAddPost: (post: Post) => void;
}) => {
  // const { onAddPost, onCreateRandomPost } = usePosts();

  const [posts] = useState(
    Array.from({ length: 5000 }, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(archiveOptions.show);

  return (
    <aside>
      <h2>{archiveOptions.title}</h2>
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

const MemoAchive = memo(Archive);

export default MemoAchive;
