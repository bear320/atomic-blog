export type Post = {
  title: string;
  body: string;
};

export type PostContextType = {
  posts: Post[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onAddPost: (post: Post) => void;
  onClearPosts: () => void;
  onCreateRandomPost: () => Post;
};
