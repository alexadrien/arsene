import React, { useEffect, useState } from 'react';
import './App.css';
import data from "./data.json";
import { numberOfVideos } from "./contants";
import ReactPlayer from "react-player";


type Video = {
  url: string,
  name: string,
};

const initialVideos: Video[] = data.slice(0, numberOfVideos);

function App() {
  const [videos, setVideos] = useState(initialVideos);
  const [counter, setCounter] = useState( 0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomVideoIndex = Math.floor(Math.random() * videos.length);
      const secondRandomVideoIndex = Math.floor(Math.random() * data.length);
      let newVideos = videos;
      newVideos[randomVideoIndex] = data[secondRandomVideoIndex];
      setVideos(newVideos);
      setCounter(counter + 1);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
      <div className="pageWrapper">
        {videos.map((video: Video, index) => (
            <div className="playingVideoWrapper" key={index}>
              <ReactPlayer url={video.url} muted playing loop />
              {/*<Player playsInline src={video.url} autoplay muted/>*/}
              {/*<video muted autoPlay loop>*/}
              {/*  <source src={video.url} />*/}
              {/*</video>*/}
              <span>{video.name}</span>
            </div>
        ))}
      </div>
  );
}

export default App;
