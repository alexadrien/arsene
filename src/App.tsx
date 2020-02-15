import React from 'react';
import './App.css';
import data from "./data.json";
import useInterval from '@use-it/interval';

type Video = {
  url: string,
  name: string,
};

const videos = data;

function App() {
  useInterval(() => {}, 30000);
  return (
    <div className="pageWrapper">
      {videos.map((video: Video, index) => (
          <div className="playingVideoWrapper" key={index}>
            <video muted autoPlay loop>
              <source src={video.url}/>
            </video>
            <span>{video.name}</span>
          </div>
      ))}
    </div>
  );
}

export default App;
