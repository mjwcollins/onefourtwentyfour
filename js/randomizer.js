// generates random number and button click

uniqueRandomArray = () => {
//debugger

var arr = []
while(arr.length < 6) {
    var r = generateRandomNumber ();
    if(arr.indexOf(r) === -1) arr.push(r);
}
return arr
}

generateRandomNumber = () => {
    return Math.floor((Math.random * 9) + 1)
}

$(function () {
    $("#roll").click(function (evt) {
        console.log(uniqueRandomArray())

        random_array = uniqueRandomArray()

        $('#inPlayOne').html(random_array[0]);
        $('#inPlayTwo').html(random_array[1]);
        $('#inPlayThree').html(random_array[2]);
        $('#inPlayFour').html(random_array[3]);
        $('#inPlayFive').html(random_array[4]);
        $('#inPlaySix').html(random_array[5]);

    });
});