/*----- constants -----*/ 
// make an array of objects

// const dice = [
//     {
//         name: 'one',
//         img: '';
//         points 1
//     }
// ]

//array.find

//const foundDie = dice.find(die) => {
//     return dice.points === diceIdx
// }
const diceIdx = Math.floor(Math.random() * 6) + 1;

const dice = [
    {
        name: 'one',
        img: 'https://i.imgur.com/U8Aweq3.jpg',
        points: 1
    },
    {
        name: 'two',
        img: 'https://i.imgur.com/3Sl88UA.jpg',
        points: 2
    },
    {
        name: 'three',
        img: 'https://i.imgur.com/C8WATr2.jpg',
        points: 3
    },
    {
        name: 'four',
        img: 'https://i.imgur.com/GF6f5l3.jpg',
        points: 4
    },
    {
        name: 'five',
        img: 'https://i.imgur.com/IFvJmjc.jpg',
        points: 5
    },
    {
        name: 'six',
        mg: 'https://i.imgur.com/umF86qj.jpg',
        points: 6
    }
];

console.log(diceIdx);

/*----- app's state (variables) -----*/ 
var results, scores, winner, lScore = 0, rScore = 0, tieScore = 0;

/*----- cached element references -----*/ 
const lScoreEl = document.querySelector('#left > h1');
const rScoreEl = document.querySelector('#right > h1');
const tieScoreEl = document.querySelector('#tie > h1');

/*----- event listeners -----*/ 
// document.getElementById('section').addEventListener('click', handleClick);

/*----- functions -----*/
init();

function handleClick() {
    results.l = getRandomNums();
    results.r = getRandomNums();
    winner = getWinner();
    scores[winner]++;
    render();
}

function getWinner() {
    return results[l] === results.r ?
    't'
    : 
    dice[results.l].points > dice[results.r] ? 'l' : 'r';
}


// function getRandomNums() {
//     return dice.Math.floor(Math.random() * 6) + 1;
// }
// console.log(getRandomNums());

function render() {
    // render scores
    lScoreEl.textContent = scores.l;
    rScoreEl.textContent = scores.r;
    tieScoreEl.textContent = scores.t;
    // render results 
    // lResultEl.style.backgroundImage = `url(${rps[results.l].img})`;
    // rResultEl.style.backgroundImage = `url(${rps[results.r].img})`;
    
}

function init() {
    winner = null;
    results = {
        l: ''
    }
}





function handleClick(evt) {
    on.click()
}
