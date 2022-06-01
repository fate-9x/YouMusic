const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play-btn");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");
const sound = document.getElementById("sound-input");

const itemsInfo = document.querySelectorAll(".container__item-info");
const itemsImg = document.querySelectorAll(".container__item-img");

const btnSongsItems = document.querySelectorAll(".btn-set-song")
const nameSongsItems = document.querySelectorAll(".name-set-song")
const imgSongsItems = document.querySelectorAll(".img-set-song")


const btnDelete = document.querySelectorAll(".btn-eliminar")
const deleteMsg = document.querySelectorAll(".eliminar-cancion-msg")

let playBtns = []


// Canciones

const songs = document.querySelectorAll(".audio-set-song");

console.log(songs)

// Index de la cancion

let songIndex = 0;

// Inicializando

addListeners()
loadSong(songs[0].src, imgSongsItems[0].src, nameSongsItems[0].innerText)

// $(document).ready(function () {

//     $("#botonCargar").click(function () {
//         $.get("../json/canciones.json",
//             function (data) {



//                 $.each(data.songsItems, (function (i, item) {

//                     let { index, archivo, nombre } = item

//                     $(".music-list").append(`<div class="music-item"><div class="container__item-img"><img class="item-img" src="img/music-img/${archivo}.jpg" alt="${archivo}" width="130"></div><div class="container__item-info"><h4 class="item-info">${nombre}</h4></div><button class="play-item" id="${index}"><i class="fas fa-play"></i></button></div>`)



//                     let song = {
//                         "nombre" : nombre,
//                         "archivo" : archivo
//                     }

//                     songs.push(song)

//                     document.getElementById(`${item.index}`).addEventListener("click", () => {

//                         songIndex = item.index
//                         changeMusic(item.index)
                        
//                     })


//                 }));

//                 loadSong(songs[songIndex].archivo, songs[songIndex].nombre )
//             });

            
//         addListeners()


//     });

// })

function loadSong(song , image, name) {
    title.innerText = name;
    audio.src = song;
    cover.src = image;
}


// Funciones

function playSong() {

    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');

    audio.pause();
}

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex].src, imgSongsItems[songIndex].src, nameSongsItems[songIndex].innerText);

    playSong();
}

function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex].src, imgSongsItems[songIndex].src, nameSongsItems[songIndex].innerText);

    playSong();
}

function updateProgress(e) {

    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`

    if (audio.currentTime == duration) {
        nextSong();
    }
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}


function changeMusic(_idx, _name, _img) {

    songIndex = _idx
    loadSong(songs[_idx].src, _img, _name);
    playSong();
}

function addListeners() {

    playBtn.addEventListener('click', () => {

        const isPlaying = musicContainer.classList.contains('play');

        if (isPlaying) {
            pauseSong();
        }
        else {
            playSong();
        }
    })

    prevBtn.addEventListener('click', prevSong)
    nextBtn.addEventListener('click', nextSong)


    audio.addEventListener('timeupdate', updateProgress);

    progressContainer.addEventListener('click', setProgress);

    btnSongsItems.forEach( (btn) => {

        console.log("aaa: " + btn.id);

        btn.addEventListener('click', (_btn) => {

            let _name;
            let _img;

            nameSongsItems.forEach( function(_nameItem) {

                console.log("nameitem: " + _nameItem.innerText);

                if(_nameItem.classList.contains(btn.id)) {

                    _name = _nameItem.innerText
                }
            } )
            imgSongsItems.forEach( function(_imgItem) {

                if(_imgItem.classList.contains(btn.id)) {

                    console.log("itemsrc: " + _imgItem.src);

                    _img = _imgItem.src
                }
            } )

            changeMusic(btn.id, _name, _img)

            console.log("btn id: " + btn.id + " img: " + _img + " name: " + _name);
    
        })
    } )

    // $(".btn-eliminar").click( function() {

    //     let id_btn = $(".btn-eliminar")[1].classList[2]

    //     if($("eliminar-cancion-msg")[$(".btn-eliminar")[1].classList[2]]){

    //     }
        
    // })


}

// $(".btn-eliminar")[1].classList[2];

$(".btn-eliminar").each(function (index) {

    $(".btn-eliminar")[index].click(() => {

            console.log($("eliminar-cancion-msg ." + index));

            console.log("aaaaaaaaaaaaaaaaa");

            
        } )

    
});

