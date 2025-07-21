//Menu elements



export function menu() {
        let menuTitle = document.getElementById("title");
        let playButton = document.getElementById("play");
        let musicButton = document.getElementById("music");
        let soundButton = document.getElementById("sound");
        let githubButton = document.getElementById("github");

        soundArray = ["SOUND: 0%","SOUND: 25%"
            ,"SOUND: 50%","SOUND: 75%", "SOUND: 100%"]

        soundButton.addEventListener("click", function () {
            soundCurrentIndex = soundArray.indexOf(soundButton.textContent)
            soundNextIndex = (soundCurrentIndex + 1) % soundArray.length
            soundButton.textContent = soundArray[soundNextIndex]
        })

        musicArray = ["MUSIC: 0%","MUSIC: 25%"
            ,"MUSIC: 50%","MUSIC: 75%", "MUSIC: 100%"]

        musicButton.addEventListener("click", function () {
            musicCurrentIndex = musicArray.indexOf(musicButton.textContent)
            musicNextIndex = (musicCurrentIndex + 1) % musicArray.length
            musicButton.textContent = musicArray[musicNextIndex]
        })

        playButton.addEventListener("click", function () {
            playButton.remove()
            soundButton.remove()
            musicButton.remove()
            menuTitle.remove()
            githubButton.remove()
        })
}