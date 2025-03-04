import React from "react";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="w-full bg-black overflow-hidden h-full">
      <video
        src={videoUrl}
        className="w-full h-full object-cover"
        controls
      />
    </div>
  );
};

export default VideoPlayer;
