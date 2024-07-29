import { useState, createContext, useMemo, useCallback } from "react";
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
    Array.from({ length: 50 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  const searchPosts =
    searchQuery.length > 0
      ? posts.filter((p: Post) =>
          `${p.title} ${p.body}`.toLowerCase().includes(searchQuery)
        )
      : posts;

  const handleAddPost = useCallback((post: Post) => {
    setPosts((posts) => [...posts, post]);
  }, []);

  const handleClearPosts = useCallback(() => {
    setPosts([]);
  }, []);

  const value = useMemo(() => {
    return {
      posts: searchPosts,
      searchQuery,
      setSearchQuery,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      onCreateRandomPost: createRandomPost,
    };
  }, [searchPosts, searchQuery, handleAddPost, handleClearPosts]);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export { PostProvider, PostContext };
