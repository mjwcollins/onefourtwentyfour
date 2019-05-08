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

// make a variable for hand 

// diceIdx is my random number!!!

const diceIdx = Math.floor(Math.random() * 6) + 1;

// array of objects treat as objects
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
        img: 'https://i.imgur.com/umF86qj.jpg',
        points: 6
    }
];

// console.log(diceIdx);

// if (diceIdx == 1) {
//     #leftOne === dice.diceIdx[0]

// }

//use if else to get images to display


/*----- app's state (variables) -----*/
// var results, scores, winner, lScore = 0, rScore = 0, tieScore = 0;
var images = [$('#inPlayOne'), $('#inPlayTwo'), $('#inPlayThree'), $('#inPlayFour'), $('#inPlayFive'), $('#inPlaySix')];

var imagesSrcs = ['https://i.imgur.com/U8Aweq3.jpg', 'https://i.imgur.com/3Sl88UA.jpg', 'https://i.imgur.com/C8WATr2.jpg', 'https://i.imgur.com/GF6f5l3.jpg', 'https://i.imgur.com/IFvJmjc.jpg', 'https://i.imgur.com/umF86qj.jpg',]
/*----- cached element references -----*/
// const lScoreEl = document.querySelector('#left');
// const rScoreEl = document.querySelector('#right');
// const tieScoreEl = document.querySelector('#tie');

/*----- event listeners -----*/
// document.getElementById('roll').addEventListener('click', handleClick);

/*----- functions -----*/
// generates random number and button click

// generates random number and button click

// uniqueRandomArray = () => {
//     //debugger

//     var arr = [];
//     while (arr.length < 6) {
//         var r = generateRandomNumber();
//         if (arr.indexOf(r) === -1) arr.push(r);
//     }
//     return arr

uniqueRandomArray = () => {
    var arr = []
    while (arr.length < 6) {
        var r = generateRandomNumber();
        // if (arr.indexOf(r) !== 1) 
        arr.push(r);
    }
    return arr
}

generateRandomNumber = () => {
    
    return Math.floor((Math.random() * 6))
}
// console.log(uniqueRandomArray());
// console.log(uniqueRandomArray());
// console.log(uniqueRandomArray());
$(function () {
    $("#roll").click(function (evt) {
        console.log(uniqueRandomArray())
        
        random_array1 = generateRandomNumber()
        random_array2 = generateRandomNumber()
        random_array3 = generateRandomNumber()
        random_array4 = generateRandomNumber()
        random_array4 = generateRandomNumber()
        random_array5 = generateRandomNumber()

        $('#inPlayOne').attr('src', imagesSrcs[random_array1]);
        $('#inPlayTwo').attr('src', imagesSrcs[random_array2]);
        $('#inPlayThree').attr('src', imagesSrcs[random_array3]);
        $('#inPlayFour').attr('src', imagesSrcs[random_array4]);
        $('#inPlayFive').attr('src', imagesSrcs[random_array4]);
        $('#inPlaySix').attr('src', imagesSrcs[random_array5]);

    //    append all of the above jquery elements to the appropriate parent
    });
});

// var generateRandomNumber1 = generateRandomNumber[0].clone();

console.log(generateRandomNumber());








// init();

// function handleClick() {
//     results.l = getRandomNums();
//     results.r = getRandomNums();
//     winner = getWinner();
//     scores[winner]++;
//     render();
// }

// var columnExample = arraycolumn1[0].clone() 
// $('h3').hmtmlColumnExample

// function getWinner() {
//     return results[l] === results.r ?
//     't'
//     : 
//     dice[results.l].points > dice[results.r] ? 'l' : 'r';
// }


// // function getRandomNums() {
// //     return dice.Math.floor(Math.random() * 6) + 1;
// // }
// // console.log(getRandomNums());

// function render() {
//     // render scores
//     lScoreEl.textContent = scores.l;
//     rScoreEl.textContent = scores.r;
//     tieScoreEl.textContent = scores.t;
//     // render results 
//     // lResultEl.style.backgroundImage = `url(${rps[results.l].img})`;
//     // rResultEl.style.backgroundImage = `url(${rps[results.r].img})`;

// }

// function init() {
//     winner = null;
//     results = {
//         l: ''
//     }
// }





// function handleClick(evt) {
//     on.click()
// }


// $(function () {

// })