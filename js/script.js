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
// const dice = [
//     {
//         name: 'one',
//         img: 'https://i.imgur.com/U8Aweq3.jpg',
//         points: 1
//     },
//     {
//         name: 'two',
//         img: 'https://i.imgur.com/3Sl88UA.jpg',
//         points: 2
//     },
//     {
//         name: 'three',
//         img: 'https://i.imgur.com/C8WATr2.jpg',
//         points: 3
//     },
//     {
//         name: 'four',
//         img: 'https://i.imgur.com/GF6f5l3.jpg',
//         points: 4
//     },
//     {
//         name: 'five',
//         img: 'https://i.imgur.com/IFvJmjc.jpg',
//         points: 5
//     },
//     {
//         name: 'six',
//         img: 'https://i.imgur.com/umF86qj.jpg',
//         points: 6
//     }
// ];

// console.log(diceIdx);

// if (diceIdx == 1) {
//     #leftOne === dice.diceIdx[0]

// }

//use if else to get images to display


/*----- app's state (variables) -----*/
// var results, scores, winner, lScore = 0, rScore = 0, tieScore = 0;
var images = [$('#inPlay1'), $('#inPlay2'), $('#inPlay3'), $('#inPlay4'), $('#inPlay5'), $('#inPlay6')];

var imagesSrcs = ['https://i.imgur.com/U8Aweq3.jpg', 'https://i.imgur.com/3Sl88UA.jpg', 'https://i.imgur.com/C8WATr2.jpg', 'https://i.imgur.com/GF6f5l3.jpg', 'https://i.imgur.com/IFvJmjc.jpg', 'https://i.imgur.com/umF86qj.jpg',]

// https://i.imgur.com/U8Aweq3.jpg - 1
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
        random_array5 = generateRandomNumber()
        random_array6 = generateRandomNumber()

        $('#inPlay #inPlay1').attr('src', imagesSrcs[random_array1]);
        $('#inPlay #inPlay1').attr('data-index', random_array1 + 1);

        $('#inPlay #inPlay2').attr('src', imagesSrcs[random_array2]);
        $('#inPlay #inPlay2').attr('data-index', random_array2 + 1);

        $('#inPlay #inPlay3').attr('src', imagesSrcs[random_array3]);
        $('#inPlay #inPlay3').attr('data-index', random_array3 + 1);

        $('#inPlay #inPlay4').attr('src', imagesSrcs[random_array4]);
        $('#inPlay #inPlay4').attr('data-index', random_array4 + 1);

        $('#inPlay #inPlay5').attr('src', imagesSrcs[random_array5]);
        $('#inPlay #inPlay5').attr('data-index', random_array5 + 1);

        $('#inPlay #inPlay6').attr('src', imagesSrcs[random_array6]);
        $('#inPlay #inPlay6').attr('data-index', random_array6 + 1);

    //    append all of the above jquery elements to the appropriate parent
    });
});

// var generateRandomNumber1 = generateRandomNumber[0].clone(); 

console.log(generateRandomNumber());


function allowDrop(ev) {
    ev.preventDefault();
  }
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    
    // grabs the dropped element ID
    var data = ev.dataTransfer.getData("text");
    
    // appends dropped element to player hand
    ev.target.appendChild(document.getElementById(data));
    
    // after drop, update id on dropped div > img
    document.querySelector(`#${data}`).setAttribute('id', '');
    
    
}



// repopulate the empty inPlay array
        // create new element
            // var replacementDie = document.createElement(`<div id="x1" draggable="true" ondragstart="drag(event)"><img id="#${ data }" src="pictures/dice/1.jpg" width="100%" height="100%"></div>`);
        
        // find the empty inPlay slot
       var emptyDivs = document.querySelectorAll('#inPlay div:empty');
        // append the new element to that spot

        function refillDice () {
            
            var emptyDivs = document.querySelectorAll('#inPlay div:empty');
            console.log(emptyDivs)
            // const idNames = [
            //     'inPlayOne',
            //     'inPlayTwo',
            //     'inPlayThree',
            //     'inPlayFour',
            //     'inPlayFive',
            //     'inPlaySix',
            // ]
        if (emptyDivs.length === 6) {
        for (let i = 0; i < emptyDivs.length; i++) {
            // var replacementDie = document.createElement(`<div id="x1" draggable="true" ondragstart="drag(event)"><img id="#${ i }" src="pictures/dice/1.jpg" width="100%" height="100%"></div>`);
            // var replacementDie = document.createElement(`<img id="#${ i }" src="pictures/dice/1.jpg" width="100%" height="100%" />`);
            var replacementDie = document.createElement('img')
            replacementDie.setAttribute('id', `inPlay${ i + 1 }`)
            replacementDie.setAttribute('data-index', 1)
            replacementDie.setAttribute('src', "pictures/dice/1.jpg")
            replacementDie.setAttribute('width', "100%")
            replacementDie.setAttribute('height', "100%")
            // , {id: `#${ i + 1 }`,  src: "pictures/dice/1.jpg",  width: "100%", height: "100%"});
            console.log(replacementDie)
                emptyDivs[i].appendChild(replacementDie);
            };
        }
    };
            
    
        
        
        // document.querySelectorAll('#inPlay div:empty').appendChild(replacementDie);




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

// }