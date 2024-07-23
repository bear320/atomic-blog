import { useState, createContext } from "react";
import { Post, PostContextType } from "../types";
import { faker } from "@faker-js/faker";

const createRandomPost = (): Post => {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
};

const PostContext = createContext({} as PostContextType);

const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  const searchPosts =
    searchQuery.length > 0
      ? posts.filter((p: Post) =>
          `${p.title} ${p.body}`.toLowerCase().includes(searchQuery)
        )
      : posts;

  const handleAddPost = (post: Post) => {
    setPosts((posts) => [...posts, post]);
  };

  const handleClearPosts = () => {
    setPosts([]);
  };

  return (
    <PostContext.Provider
      value={{
        posts: searchPosts,
        searchQuery,
        setSearchQuery,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        onCreateRandomPost: createRandomPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider, PostContext };
