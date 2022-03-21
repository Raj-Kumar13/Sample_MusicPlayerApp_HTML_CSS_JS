

console.log("welcome to musicq")

//Initialzer the Variable
let songIndex = 0;
let audioElement = new Audio('Darshana.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar =document.getElementById('myProgressBar')
let songs=[
    { songName: "Darshana", filePath: "songs/1.mp3", coverPath:"cover/1.jpg"},
    { songName: "Darshana", filePath: "songs/1.mp3", coverPath:"cover/1.jpg"},
    { songName: "Darshana", filePath: "songs/1.mp3", coverPath:"cover/1.jpg"},
    { songName: "Darshana", filePath: "songs/1.mp3", coverPath:"cover/1.jpg"},
    { songName: "Darshana", filePath: "songs/1.mp3", coverPath:"cover/1.jpg"},
    { songName: "Darshana", filePath: "songs/1.mp3", coverPath:"cover/1.jpg"}

]


//audioElement.play()
//Handle play/pause click
masterPlay.addEventListener('click' , () =>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
    }

});

//Listen to Events

document.addEventListener('timeupdate', ()=>{

})