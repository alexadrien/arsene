import React, { useEffect, useState } from 'react';
import './App.css';
import data from "./data.json";
import { numberOfVideos } from "./contants";


type Video = {
  url: string,
  name: string,
};

const initialVideos: Video[] = data.slice(0, numberOfVideos);

function App() {
  const [videos, setVideos] = useState(initialVideos);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomVideoIndex = Math.floor(Math.random() * videos.length);
      let newVideos = videos;
      newVideos[randomVideoIndex] = data[data.length - 1];
      setVideos(newVideos);
      setCounter(counter + 1);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
      <div className="pageWrapper">
        {videos.map((video: Video, index) => (
            <div className="playingVideoWrapper" key={index}>
              <video muted autoPlay loop>
                <source src={video.url} />
              </video>
              <span>{video.name}</span>
            </div>
        ))}
      </div>
  );
}

export default App;
