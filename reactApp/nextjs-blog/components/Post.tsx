// components/Post.tsx
import React from 'react';

interface PostProps {
  title: string;
  imageUrl: string;
  youtubeEmbedUrl: string;
  description: string;
}

const Post: React.FC<PostProps> = ({ title, imageUrl, youtubeEmbedUrl, description }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold m-4">{title}</h2>
      <img src={imageUrl} alt={title} className="my-4 w-full" />
      <div className="w-full aspect-w-16 aspect-h-9">
        <iframe
          src={youtubeEmbedUrl}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <p className="mt-4">{description}</p>
    </div>
  );
};

export default Post;
