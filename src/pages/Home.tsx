import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <div className="max-w-2xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Welcome to the Blog</h1>
    <p className="mb-4">here are my projects</p>

    <Link to="/blog/demo" className="text-blue-600 underline">
      👉 demo blog-entry
    </Link><br></br>
    <Link to="/blog/gitops-challenges" className="text-blue-600 underline">
      👉 gitops
    </Link><br></br>
    <Link to="/blog/k3s-guide" className="text-blue-600 underline">
      👉 k3s
    </Link>
  </div>
);

export default Home;
