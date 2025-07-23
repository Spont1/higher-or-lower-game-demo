// HTML Elements variable assignment
let menuTitle = document.getElementById("title");
let playButton = document.getElementById("play");
let soundTestButton = document.getElementById("click");
let soundButton = document.getElementById("sound");
let githubButton = document.getElementById("github");
let menuButtons = document.getElementById('menuButtons');

// Making the sound button work

soundArray = ["SOUND: 0%","SOUND: 25%"
    ,"SOUND: 50%","SOUND: 75%", "SOUND: 100%"]

soundButton.addEventListener("click", function () {
    soundCurrentIndex = soundArray.indexOf(soundButton.textContent)
    soundNextIndex = (soundCurrentIndex + 1) % soundArray.length
    soundButton.textContent = soundArray[soundNextIndex]
})

function getCountry() { 
    const randInt = Math.floor(Math.random() * 31)

    country  = (Object.keys(data)[randInt])

    pop = (Object.values(data)[randInt])

    return [country, pop];
}

function renderGame() {
    let firstCountry = getCountry();
    let secondCountry = getCountry();
    if (secondCountry === firstCountry) {
        secondCountry = getCountry();
    }
    
    let firstCountryName = firstCountry[0]
    let firstCountryPop = firstCountry[1]
    
    let secondCountryName = secondCountry[0]
    let secondCountryPop = secondCountry[1]

    let selectButtons = document.createElement('div')
    let elementOne = document.createElement('p');
    let elementTwo = document.createElement('p');


    selectButtons.id = 'gameButtons';

    elementOne.textContent = firstCountryName;
    elementOne.id = 'specificGameButton';

    elementTwo.textContent = secondCountryName;
    elementTwo.id = 'specificGameButton';

    document.body.appendChild(selectButtons);
    selectButtons.appendChild(elementOne);
    selectButtons.appendChild(elementTwo);

    console.log('GAME RENDERED')

    elementOne.addEventListener("click", function () {
        const keyOne = elementOne.textContent;
        const valueOne = (Number(data[keyOne]))

        const keyTwo = elementTwo.textContent;
        const valueTwo = (Number(data[keyTwo]))

        console.log(`First country: ${keyOne}, ${valueOne}`)
        console.log(`Second country: ${keyTwo}, ${valueTwo}`)

        /* TODO

        if (valueOne > valueTwo) {

        }
        */
        })


}



objective = generateInDOM('h2', 'objective', 'PICK A COUNTRY WITH HIGHER POPULATION');
scoreCount = 0;
score = generateInDOM('h2', 'score', `SCORE: ${scoreCount}`);

playButton.addEventListener("click", function () {

    playButton.remove();
    soundButton.remove();
    soundTestButton.remove();
    menuTitle.remove();
    githubButton.remove();
    menuButtons.remove();
    document.body.appendChild(objective);
    document.body.appendChild(score);
    renderGame();
})


function generateInDOM(type, id, text) {

const elementName = document.createElement(type)
elementName.id = id;
elementName.innerText = text;

return elementName
}

// DATA (I want the project to be 100% client side)

const data = {
    'Poland': '3800000',
    'Norway': '5600000',
    "China": "1410000000",
    "India": "1460000000",
    "United States": "347000000",
    "Indonesia": "286000000",
    "Pakistan": "255000000",
    "Nigeria": "238000000",
    "Brazil": "21300000",
    "Bangladesh": "176000000",
    "Russian Federation": "144000000",
    "Mexico": "132000000",
    "Japan": "123000000",
    "Ethiopia": "136000000",
    "Philippines": "117000000",
    "Egypt": "118000000",
    "Vietnam": "99000000",
    "DR Congo": "113000000",
    "Turkey": "86000000",
    "Iran": "88000000",
    "Germany": "84000000",
    "Thailand": "71000000",
    "United Kingdom": "70000000",
    "France": "67000000",
    "Italy": "59500000",
    "Tanzania": "63000000",
    "South Africa": "63200000",
    "Myanmar": "51300000",
    "Kenya": "55300000",
    "South Korea": "51700000",
    "Spain": "48000000",
    "Canada": "39300000"
}