import Header from "@/components/layout/Header";
import React from "react";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostsPage;

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: PostProps[] = await res.json();

    return {
      props: {
        posts,
      },
      revalidate: 60, 
    };
  } catch (error) {
    console.error("Error fetching posts:", error);

    return {
      props: {
        posts: [],
      },
    };
  }
}

export default PostsPage;