import Button from "./components/buttons.js";
import Video from "./components/video.js";

const myApp = document.getElementById("myApp");

let myButton = new Button("Signing", "btn btn-outline-primary mybutton");

myApp.innerHTML = myButton.render();

let myVideo = new Video("https://www.w3schools.com/tags/movie.mp4", 320,240, "none");
//"../assets/video/bla.mp4"

myApp.innerHTML += myVideo.render();