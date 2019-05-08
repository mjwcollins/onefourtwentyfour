// generates random number and click and drag handle

uniqueRandomArray = () => {
 //debugger

 var arr = []
 while(arr.length < 3){
     var r = generateRandomNumber() ;
     if(arr.indexOf(r) === -1) arr.push(r);
 }
 return arr
}


generateRandomNumber = () => {

 return Math.floor((Math.random() * 9) + 1)
}


$(function () {
 $("#handle, #spin").click(function (e) {
   console.log(uniqueRandomArray())


   random_array = uniqueRandomArray()

   $('#n1').html(random_array[0]).css({'color':'red'});
   $('#n2').html(random_array[1]);
   $('#n3').html(random_array[2]);

   random_array = uniqueRandomArray()

   $('#n4').html(random_array[0]);
   $('#n5').html(random_array[1]);
   $('#n6').html(random_array[2]);

   random_array = uniqueRandomArray()

   $('#n7').html(random_array[0]);
   $('#n8').html(random_array[1]);
   $('#n9').html(random_array[2]);
   $('#handle').addClass("drag").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
     $('#handle').removeClass("drag");
   });
 });
});