

//https://www.youtube.com/watch?v=dQw4w9WgXcQ
function testing(){
    console.log("this function is running");
    var video = document.getElementById('rick_video');
    video.style.width = "100%";
    video.play()
    //window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
}

let width = 1;
let time_interval = 20;
function start() {
    const bar = document.querySelector('.bar');
    const success = document.querySelector('.success')
    const counter = document.querySelector('.counter')

        var interval = setInterval(() => {
                if (width >= 100) {
                    //success.innerHTML = 'Dowload completed!'
                    bar.style.backgroundColor = "#00ff0f";
                    clearInterval();
                    setTimeout(() => {testing(); delete interval;}, 2000);
                } else {
                    width++;
                    bar.style.width = width + '%';
                    counter.innerHTML = width + '%';
                }
            }, time_interval);
        }

