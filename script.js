const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const playBtn = document.getElementById("play");

// check if playing
let isPlaying = false;

// play
function playSong() {
  let isPlaying = false;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// play/pause event listener
playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});
