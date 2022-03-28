const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play-btn");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

// Titulos

const songs = ['dileatuamiga', 'wakawaka', 'stfu'];



// Index de la cancion

let songIndex = 0;

// Inicializando canciones

loadSong(songs[songIndex]);

// Actualizar informacion de la cancion

function loadSong(song) {
    title.innerText = song;
    audio.src = `./audio/${song}.mp3`;
    cover.src = `./img/music-img/${song}.jpg`;
}

function playSong(){
    
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    
    audio.pause();
}

function prevSong() {
    songIndex--;

    if(songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex]);

    playSong();
}

function nextSong() {
    songIndex++;

    if(songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex]);

    playSong();
}

function updateProgress(e) {

    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

// Listener

playBtn.addEventListener('click', () => {

    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying) {
        pauseSong();
    }
    else{
        playSong();
    }
})

// Cambiar canciones

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

// Barra de progreso

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);