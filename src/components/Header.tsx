// import { usePosts } from "../hooks/usePosts";
import { Post } from "../types";

const Header = ({
  posts,
  searchQuery,
  setSearchQuery,
  onClearPosts,
}: {
  posts: Post[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onClearPosts: () => void;
}) => {
  // const { posts, searchQuery, setSearchQuery, onClearPosts } = usePosts();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <p>🚀 {posts.length} atomic posts found</p>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search posts..."
        />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
};

export default Header;
