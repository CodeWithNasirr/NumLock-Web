import React, { useRef, useState } from "react";

const IntroVideo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full min-w-full min-h-full"
      >
        <source src="/video/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Buttons Overlay */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={toggleMute}
          className="bg-black bg-opacity-50 text-white px-3 py-1 rounded"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <button
          onClick={togglePlay}
          className="bg-black bg-opacity-50 text-white px-3 py-1 rounded"
        >
          {isPaused ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  );
};

export default IntroVideo;
