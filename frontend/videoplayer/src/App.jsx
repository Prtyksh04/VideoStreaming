import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './VideoPlayer'
import { useRef } from 'react'

function App() {
  const playerRef = useRef(null)
  const videoLink = "http://localhost:3000/uploads/video/bde549fa-3fc2-4b96-8154-7be8cbff51e8/index.m3u8"
  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL"
      }
    ]
  }
  return (
    <>
      <h1>Video Player</h1>
      <VideoPlayer
        options={videoPlayerOptions}
        onReady={handlePlayerReady}
      />
    </>
  )
}
const handlePlayerReady = (player) => {
  playerRef.current = player;

  // You can handle player events here, for example:
  player.on("waiting", () => {
    videojs.log("player is waiting");
  });

  player.on("dispose", () => {
    videojs.log("player will dispose");
  });
};

export default App
