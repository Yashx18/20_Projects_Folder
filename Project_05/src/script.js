const video = document.getElementById('video')
const play = document.getElementById('play')
const Stop = document.getElementById('stop')
const timeStamp = document.getElementById('timestamp')
const progress = document.getElementById('progress')

//Toggle Video Status
function toggleVideoStatus(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

//Toggle Between Play and Pause Button
function togglePlayIcon(){
    if(video.paused){
        play.innerHTML=`<i class="fa fa-play fa-2x"></i>`
    }else{
        play.innerHTML=`<i class="fa fa-pause fa-2x"></i>`
    }
}
//To update the progress bar 
function updateProgressBar(){
    // console.log(video.duration);
    progress.value= (video.currentTime / video.duration) * 100

    let mins = Math.floor(video.currentTime/60)
    if (mins < 10) {
        mins = '0' + String(mins);
      }
    let sec = Math.floor(video.currentTime%60)
    if (sec < 10) {
        sec = '0' + String(sec);
      }

    timeStamp.innerHTML = `${mins}:${sec}`
    // console.log(mins);
    

    
}

//Stop Video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

//Change the Progress bar
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration )/ 100
}
// Event Listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', togglePlayIcon)
video.addEventListener('play', togglePlayIcon)
video.addEventListener('timeupdate', updateProgressBar)

play.addEventListener('click', toggleVideoStatus)
play.addEventListener('click', togglePlayIcon)
Stop.addEventListener('click',stopVideo)
progress.addEventListener('change', setVideoProgress)


