// HTML Elements variable assignment
let menuTitle = document.getElementById("title");
let playButton = document.getElementById("play");
let soundTestButton = document.getElementById("click");
let soundButton = document.getElementById("sound");
let githubButton = document.getElementById("github");
let menuButtons = document.getElementById('menuButtons');
let scoreCount = 0;
let roundFinished = false;

// Making the sound button work

soundArray = ["SOUND: 0%","SOUND: 25%"
    ,"SOUND: 50%","SOUND: 75%", "SOUND: 100%"]

soundButton.addEventListener("click", function () {
    soundCurrentIndex = soundArray.indexOf(soundButton.textContent)
    soundNextIndex = (soundCurrentIndex + 1) % soundArray.length
    soundButton.textContent = soundArray[soundNextIndex]
})


score = generateInDOM('p', 'score', `SCORE: ${scoreCount}`)
objective = generateInDOM('h2', 'objective', 'PICK A COUNTRY WITH HIGHER POPULATION');
nextRoundButton = generateInDOM('h2', 'nextRound', `Next round`);
gameOver = generateInDOM('h2', 'objective', 'GAME OVER!')
playAgainButton = generateInDOM('p', 'country', 'PLAY AGAIN?')

playButton.addEventListener("click", function () {

    clearBody();
    document.body.appendChild(objective);
    renderGame();
})


function generateInDOM(type, id, text) {

const elementName = document.createElement(type)
elementName.id = id;
elementName.innerText = text;

return elementName
}

function getFirstNumber(stringOfNumbers) {
    let newArray = [];
    for (i = 0; i < stringOfNumbers.length || stringOfNumbers.length === 10 ; i++) {
        if (i === 0 && stringOfNumbers.length === 7) {
           newArray.push(stringOfNumbers[i], " ")

        } else if (i === 0 && stringOfNumbers.length === 8) {
            newArray.push(stringOfNumbers[i], stringOfNumbers[i + 1], " ")
            i + 1

        } else if (i === 0 && stringOfNumbers.length === 9) {
            newArray.push(stringOfNumbers[i], stringOfNumbers[i + 1], stringOfNumbers[i + 2], " ")
            i + 2

        } else {
            newArray.push(stringOfNumbers[i])

        }

        }

    return newArray.join("")
}


function getCountry() { 
    const randInt = Math.floor(Math.random() * 31)

    country  = (Object.keys(data)[randInt])

    pop = (Object.values(data)[randInt])

    return [country, pop];
}

function clearBody() {
    const body = document.body

    for (let i = body.children.length - 1; i>= 0; i--) {
        let child = body.children[i];
        child.remove()
    }

}

function gameOverScreen() {
        roundFinished = false;
        clearBody()
        document.body.appendChild(gameOver)
        score.innerText = `YOU GOT ${scoreCount} COUNTRIES RIGHT!`
        document.body.appendChild(score)
        document.body.appendChild(playAgainButton)

        playAgainButton.addEventListener("click", function () {
            clearBody()
            scoreCount = 0;
            renderGame()
        })
}

function renderGame() {
    score.innerText = `SCORE: ${scoreCount}`

    //Get two countries

    let firstCountry = getCountry();
    let secondCountry = getCountry();

    while (secondCountry === firstCountry) {
        secondCountry = getCountry();
    }
    
    let firstCountryName = firstCountry[0]
    let secondCountryName = secondCountry[0]

    //Create DOM elements

    let selectButtons = document.createElement('div')
    let elementOne = document.createElement('p');
    let elementTwo = document.createElement('p');

    let firstElementDiv = document.createElement('div')
    let secondElementDiv = document.createElement('div')

    selectButtons.id = 'gameButtons';
    firstElementDiv.id = 'country';
    secondElementDiv.id = 'country';

    elementOne.textContent = firstCountryName;
    elementOne.id = 'specificGameButton';

    elementTwo.textContent = secondCountryName;
    elementTwo.id = 'specificGameButton';

    document.body.appendChild(objective);
    document.body.appendChild(score)

    document.body.appendChild(selectButtons);

    selectButtons.appendChild(firstElementDiv);
    selectButtons.appendChild(secondElementDiv);

    firstElementDiv.appendChild(elementOne);
    secondElementDiv.appendChild(elementTwo);

    console.log('GAME RENDERED')

    
    //Make population DOM elements, get population and make it look better

    const keyOne = elementOne.textContent;
    const keyTwo = elementTwo.textContent;
    const firstCountryPopValue = (Number(data[keyOne]));
    const secondCountryPopValue = (Number(data[keyTwo]));

    const firstPopAsString = firstCountryPopValue.toString() 
    const secondPopAsString = secondCountryPopValue.toString() 

    const visibleFirstCountryPop = getFirstNumber(firstPopAsString.split(""))
    const visibleSecondCountryPop = getFirstNumber(secondPopAsString.split(""))

    const firstPop = document.createElement('p');
    firstPop.textContent = ('Population:')

    const firstPopValue = document.createElement('p');
    firstPopValue.id = 'populationValue';
    firstPopValue.textContent = (visibleFirstCountryPop);

    const secondPop = document.createElement('p');
    secondPop.id = 'populationValue';
    secondPop.textContent = ('Population:')

    const secondPopValue = document.createElement('p');
    secondPopValue.id = 'populationValue';
    secondPopValue.textContent = (visibleSecondCountryPop);
    
    //GAME LOOP

    elementOne.addEventListener("click", function () {
        if (roundFinished) return;
        roundFinished = true;

        console.log(`First country: ${keyOne}, ${firstCountryPopValue}`)
        console.log(`Second country: ${keyTwo}, ${secondCountryPopValue}`)

        if (firstCountryPopValue > secondCountryPopValue) {
            scoreCount += 1
            score.innerText = `SCORE: ${scoreCount}`;

            firstElementDiv.appendChild(firstPop);
            firstElementDiv.appendChild(firstPopValue);
            secondElementDiv.appendChild(secondPop);
            secondElementDiv.appendChild(secondPopValue);
            document.body.appendChild(nextRoundButton);
        } else {
            gameOverScreen();
        }
        })

    elementTwo.addEventListener("click", function () {
        if (roundFinished) return;
        roundFinished = true;

        console.log(`First country: ${keyOne}, ${firstCountryPopValue}`)
        console.log(`Second country: ${keyTwo}, ${secondCountryPopValue}`)

        if (firstCountryPopValue < secondCountryPopValue) {
            scoreCount += 1
            score.innerText = `SCORE: ${scoreCount}`;

            firstElementDiv.appendChild(firstPop);
            firstElementDiv.appendChild(firstPopValue);
            secondElementDiv.appendChild(secondPop);
            secondElementDiv.appendChild(secondPopValue);
            document.body.appendChild(nextRoundButton);
        } else {
            gameOverScreen();
        }
        })

    }

    nextRoundButton.addEventListener("click", function () {
        roundFinished = false;
        clearBody();
        renderGame();
    })


const data = {
    'Poland': '38000000',
    'Norway': '5600000',
    "China": "1410000000",
    "India": "1460000000",
    "United States": "347000000",
    "Indonesia": "286000000",
    "Pakistan": "255000000",
    "Nigeria": "238000000",
    "Brazil": "213000000",
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
    "Canada": "39300000",
    'Sweden': '10500000',
    'Finland': '5600000',
    'Argentina': '46000000',
    'Colombia': '52000000',
    'Chile': '19500000',
    'Peru': '34000000',
    'Venezuela': '29000000',
    'Malaysia': '34000000',
    'Saudi Arabia': '37000000',
    'Iraq': '44000000',
    'Afghanistan': '42000000',
    'Uzbekistan': '36000000',
    'Morocco': '38000000',
    'Algeria': '46000000',
    'Sudan': '48000000',
    'Uganda': '47000000',
    'Ukraine': '37000000',
    'Kazakhstan': '20000000',
    'Nepal': '31000000',
    'Ghana': '35000000',
    'Yemen': '34000000',
    'Angola': '37000000',
    'Mozambique': '34000000',
    'Cameroon': '29000000',
    'Niger': '27000000',
    'Mali': '23000000',
    'Zambia': '21000000',
    'Senegal': '18000000',
    'Zimbabwe': '17000000',
    'Guatemala': '19000000',
    'Honduras': '11000000',
    'Paraguay': '7500000'
}