import Header from "@/components/layout/Header";
import React, { Component } from "react";
import React, { useEffect, useState } from "react";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data: PostProps[] = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p className="p-4">Loading posts...</p>;
  }
const PostsPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
      <p className="mb-4">Welcome to the Posts Page. Here are some of our latest posts.</p> 
        <ul className="list-disc list-inside space-y-2">
            <Header />
      <Header {...PostProps} />
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </>
    </div>
    );
};

export default PostsPage;