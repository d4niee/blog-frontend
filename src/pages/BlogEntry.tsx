import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogMap } from '../blogs/blogIndex';

const markdownFiles = import.meta.glob('../blogs/*.md', {
    query: '?raw',
    import: 'default',
  });
  
const BlogEntry: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [markdown, setMarkdown] = useState<string>('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const fileName = slug ? blogMap[slug] : null;
    const path = fileName ? `../blogs/${fileName}` : null;

    if (!path || !(path in markdownFiles)) {
      setError(true);
      return;
    }

    markdownFiles[path]()
    .then((content) => setMarkdown(content as string))
    .catch(() => setError(true));
  }, [slug]);

  if (error) return <div className="p-4 text-red-500">Eintrag nicht gefunden.</div>;

  return (
    <div className="max-w-2xl mx-auto p-4 prose prose-lg">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default BlogEntry;
