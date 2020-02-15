import React from 'react';
import './App.css';
import data from "./data.json";

type Video = {
  url: string,
};

function App() {
  console.log(data);
  return (
    <div className="pageWrapper">
      {data.map((video: Video) => (
          <div className="playingVideoWrapper">
            <video muted autoPlay>
              <source src={video.url}/>
            </video>
          </div>
      ))}
    </div>
  );
}

export default App;
