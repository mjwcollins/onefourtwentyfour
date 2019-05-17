/*----- constants -----*/


// diceIdx is my random number!!!

// const diceIdx = Math.floor(Math.random() * 6) + 1;



/*----- app's state (variables) -----*/

var images = [$('#inPlay1'), $('#inPlay2'), $('#inPlay3'), $('#inPlay4'), $('#inPlay5'), $('#inPlay6')];

var imagesSrcs = ['https://i.imgur.com/U8Aweq3.jpg', 'https://i.imgur.com/3Sl88UA.jpg', 'https://i.imgur.com/C8WATr2.jpg', 'https://i.imgur.com/GF6f5l3.jpg', 'https://i.imgur.com/IFvJmjc.jpg', 'https://i.imgur.com/umF86qj.jpg',]


/*----- cached element references -----*/
// var lScoreEl = document.getElementById(#left).getElementsByTagName('img')
// console.log(lScoreEl); 
// const rScoreEl = document.querySelector('#right');
// const tieScoreEl = document.querySelector('#tie');

// var score = 0;
// $('#left div').each(function () {
//     score += $(this).data("data-score");
// });

// console.log(score)

// const article = document.querySelector('#left');

// console.log(article.dataset.index)
function getSum(id) {
    const divs = document.querySelectorAll(`#${id} > div`);
    //# > div
    console.log(divs)
    let totalScore = 0;
    for (let i = 0; i < divs.length; i++) {
        const child = divs[i].querySelector('img')
        if (child) {
            const score = child.getAttribute('data-index')
            totalScore += parseInt(score)
        } else {
            console.log('no span')
        }
    }
    return totalScore;
}

const leftScore = getSum('left')
const rightScore = getSum('right')

/*----- event listeners -----*/


/*----- functions -----*/

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

$(function () {
    $("#roll").click(function (evt) {
        // console.log(uniqueRandomArray())

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




// console.log(generateRandomNumber());


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





// find the empty inPlay slot
var emptyDivs = document.querySelectorAll('#inPlay div:empty');
// append the new element to that spot

function refillDice() {

    var emptyDivs = document.querySelectorAll('#inPlay div:empty');
    console.log(emptyDivs)

    if (emptyDivs.length === 6) {
        for (let i = 0; i < emptyDivs.length; i++) {
            var replacementDie = document.createElement('img')
            replacementDie.setAttribute('id', `inPlay${i + 1}`)
            replacementDie.setAttribute('data-index', 1)
            replacementDie.setAttribute('src', "pictures/dice/1.jpg")
            replacementDie.setAttribute('width', "100%")
            replacementDie.setAttribute('height', "100%")

            console.log(replacementDie)
            emptyDivs[i].appendChild(replacementDie);
        };
    }
};

function init() {
    refillDice()
};
$(function () {
    $("#endTurn").click(function (evt) {
        init();
    });
});

$(function () {
    $("#rules").click(function (evt) {
        window.alert("Goal: With six dice, obtain a 1 and 4 and get the highest score possible with the other 4 dice, max score of 24. Play: Six dice and two or more players is required. Being the first player is a disadvantage so it is recommended that the starting player is determined by the lowest roll.  Player starts and continues clockwise. Player begins by rolling all six dice. After each roll the player is required to keep at least one die and re-roll the remaining. Once a dice is kept you can no longer roll it.  A turn ends when all dice have been held. A player must keep a 1 and a 4 or else they are disqualified.  The remaining four dice are totaled, the maximum score for a turn is 24. The winner is the player with the highest score.", "rules");
    })
})