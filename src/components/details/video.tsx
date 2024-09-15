import React from "react";

const getYouTubeVideoId = (url: string) => {
  const match = url.match(
    /youtube\.com\/(?:embed\/|watch\?v=)([^"&?\/\s]{11})/
  );
  return match ? match[1] : null;
};

type YouTubeEmbedProps = {
  url: string;
};

const YouTubeEmbed = ({ url }: YouTubeEmbedProps) => {
  const videoId = getYouTubeVideoId(url);

  if (!videoId) {
    return <div>Invalid YouTube URL</div>;
  }

  return (
    <div className="w-full max-w-4xl">
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
