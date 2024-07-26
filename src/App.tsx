import { useState, useEffect, useMemo } from "react";
// import { PostProvider } from "./context/PostContext";
import { Post } from "./types";
import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import { faker } from "@faker-js/faker";

const createRandomPost = (): Post => {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
};

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);
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

  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode");
  }, [isFakeDark]);

  const archiveOptions = useMemo(() => {
    return {
      show: false,
      title: `Post archive in addition to ${posts.length} main posts`,
    };
  }, [posts.length]);

  return (
    <section>
      <button
        className="btn-fake-dark-mode"
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      {/* <PostProvider> */}
      <Header
        posts={searchPosts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onClearPosts={handleClearPosts}
      />
      <Main posts={searchPosts} onAddPost={handleAddPost} />
      <Archive archiveOptions={archiveOptions} />
      <Footer />
      {/* </PostProvider> */}
    </section>
  );
}

export default App;
