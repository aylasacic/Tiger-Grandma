const arrow = document.querySelector("#arrow");
const navbar = document.querySelector(".navbar");

// audio management

const track1 = new Audio('./assets/sounds/track1.mp3');
const track2 = new Audio('./assets/sounds/track2.mp3');
const track3 = new Audio('./assets/sounds/track3.mp3');

// function playAudio(audio) {
//     audio.play();
// }

// function pauseAudio(audio) {
//     audio.pause();
// }

window.addEventListener("load", () => {
    track1.addEventListener('ended', function () {
        console.log('Audio1 finished playing');
        track_fin = 1;
        arrow.style.display = "block";
    });
    track2.addEventListener('ended', function () {
        console.log('Audio2 finished playing');
        track_fin = 2;
        arrow.style.display = "block";
    });
    track3.addEventListener('ended', function () {
        console.log('Audio3 finished playing');
        track_fin = 3;
        replay.style.display = "block";
        navbar.style.display = "flex";
    });


    let track_fin = 0;

    play.addEventListener("click", () => {
        play.style.display = "none";
        track1.play();
    });

    let count = 0;
    arrow.addEventListener("click", () => {
        if (count == 0 && track_fin == 1) {

            s1.style.display = "none";
            s3.style.display = "none";
            s2.style.display = "block";
            count++;
            track1.pause();
            track2.play();
            arrow.style.display = "none";
        }
        else if (count == 1 && track_fin == 2) {
            s2.style.display = "none";
            s1.style.display = "none";
            s3.style.display = "block";
            arrow.style.display = "none";
            track2.pause();
            track3.play();

        }

    });

    replay.addEventListener("click", () => {
        s3.style.display = "none";
        s1.style.display = "block";
        replay.style.display = "none";
        navbar.style.display = "none";
        play.style.display = "block";
        count = 0;
        track_fin = 0;
        track3.pause();
    });




});




