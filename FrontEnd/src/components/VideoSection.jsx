import { useState, useRef } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="z-20 relative w-full h-screen flex items-center justify-center bg-[#B3DDE8]">
      <div className="z-50 absolute inset-0 bg-black bg-opacity-50 opacity-50 "></div>
      <div className="absolute w-full inset-0 bg-grid-pattern-dashboard opacity-40 pointer-events-none"></div>
      <div className="z-10 absolute bottom-[0px] left-1/2 -translate-x-1/2 w-[70%] mx-auto overflow-hidden border-[20px] border-green-200 border-opacity-[0.4] rounded-xl shadow-2xl">
        <img
          src="/dashboard.PNG"
          className="w-full h-full object-cover overflow-hidden"
        />
      </div>
      <video
        ref={videoRef}
        className="w-full max-w-4xl h-auto rounded-lg"
        src="/path-to-your-video.mp4" // Replace with your video path
        poster="/path-to-your-thumbnail.jpg" // Replace with a thumbnail image path
        controls={false}
      ></video>
      {!isPlaying && (
        <div
          className="z-50 absolute inset-0 flex items-center justify-center rounded-lg cursor-pointer"
          onClick={handlePlay}
        >
          <button
            className="text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
            aria-label="Play Video"
          >
            <img src="/video-icon.jpg" className="h-16 rounded-full" />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
