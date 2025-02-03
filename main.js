// DOM Elements
const video = document.getElementById("main-video");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const fullscreenBtn = document.getElementById("fullscreen-btn");

// Play Video
playBtn.addEventListener("click", () => {
  video.play();
});

// Pause Video
pauseBtn.addEventListener("click", () => {
  video.pause();
});

// Toggle Fullscreen
fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
