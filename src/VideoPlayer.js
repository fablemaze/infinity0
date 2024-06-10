// src/VideoPlayer.js
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      sources: [{
        src: src,
        type: 'video/mp4'
      }]
    });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [src]);

  return (
    <div>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-default-skin" />
      </div>
    </div>
  );
};

export default VideoPlayer;
