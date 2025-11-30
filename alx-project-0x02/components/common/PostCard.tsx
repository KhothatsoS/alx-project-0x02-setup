import React from "react";

interface PostCardProps {
  title: string;
  content: string;
  userId: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white mb-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{content}</p>
        <p className="text-sm text-gray-500">Posted by User ID: {userId}</p>
    </div>
  );
};

export default PostCard;