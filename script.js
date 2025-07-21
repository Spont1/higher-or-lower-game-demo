
let menuTitle = document.getElementById("title");
let playButton = document.getElementById("play");
let soundTestButton = document.getElementById("click");
let soundButton = document.getElementById("sound");
let githubButton = document.getElementById("github");

soundArray = ["SOUND: 0%","SOUND: 25%"
    ,"SOUND: 50%","SOUND: 75%", "SOUND: 100%"]

soundButton.addEventListener("click", function () {
    soundCurrentIndex = soundArray.indexOf(soundButton.textContent)
    soundNextIndex = (soundCurrentIndex + 1) % soundArray.length
    soundButton.textContent = soundArray[soundNextIndex]
})

playButton.addEventListener("click", function () {

    playButton.remove();
    soundButton.remove();
    soundTestButton.remove();
    menuTitle.remove();
    githubButton.remove();

})

function generateInDOM(type, id, text) {

const elementName = document.createElement(type)
elementName.id = id;
elementName.innerText = text;

return elementName



}
