/*----- constants -----*/ 
const DICE = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six'
};

/*----- app's state (variables) -----*/ 
var board, playerOneScore, playerTwoScore;

/*----- cached element references -----*/ 

/*----- event listeners -----*/ 
document.getElementById('section').addEventListener('click', handleClick);

/*----- functions -----*/

function randomNum {
    return Math.floor(Math.random() * 6) + 1;
}

function handleClick(evt) {
    on.click()
}
