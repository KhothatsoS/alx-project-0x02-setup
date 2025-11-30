import Header from "@/components/layout/Header";
import React, { Component } from "react";

const PostsPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
      <p className="mb-4">Welcome to the Posts Page. Here are some of our latest posts.</p> 
        <ul className="list-disc list-inside space-y-2">
            <Header />
      <Component {...pageProps} />
    </>
    </div>
    );
};

export default PostsPage;