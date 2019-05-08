var images = [$('#3bar'), $('#berry'), $('#7'), $('#w'), $('#clover'),$('#melon'), $('#cherry')];



uniqueRandomArray = () => {
var arr = []
while(arr.length < 7){
var r = generateRandomNumber() ;
if(arr.indexOf(r) !== 1) arr.push(r);
}
return arr
}
generateRandomNumber = () => {

  return images[Math.floor((Math.random() * images.length))]
}
console.log(uniqueRandomArray());