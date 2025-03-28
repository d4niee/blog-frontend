import React from 'react';

interface BlogPostProps {
  title: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content }) => (
  <div className="max-w-2xl mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
    <p className="text-base leading-relaxed whitespace-pre-line">{content}</p>
  </div>
);

export default BlogPost;
