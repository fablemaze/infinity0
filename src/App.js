// src/App.js

import React, { useState, useEffect } from 'react';
import { database } from './firebaseConfig';
import { ref, get } from 'firebase/database';

const App = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideoUrls();
  }, []);

  const fetchVideoUrls = async () => {
    const videosRef = ref(database, 'videos');
    try {
      const snapshot = await get(videosRef);
      if (snapshot.exists()) {
        const videoData = snapshot.val();
        const videoUrls = Object.values(videoData);
        setVideos(videoUrls);
        playRandomVideo(videoUrls); // Play a random video on initial load
      } else {
        console.log('No videos available');
      }
    } catch (error) {
      console.error('Error fetching video URLs:', error);
    }
  };

  const playRandomVideo = (videoList = videos) => {
    if (videoList.length > 0) {
      const randomIndex = Math.floor(Math.random() * videoList.length);
      setVideoUrl(videoList[randomIndex]);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {videoUrl ? (
        <video
          key={videoUrl}
          controls
          style={{ width: '80%', maxWidth: '800px', margin: '20px auto' }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <p>Loading...</p>
      )}
      <button
        onClick={() => playRandomVideo()}
        style={{
          padding: '10px 20px',
          margin: '20px auto',
          display: 'block',
          borderRadius: '8px',
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Play Random
      </button>
    </div>
  );
};

export default App;
