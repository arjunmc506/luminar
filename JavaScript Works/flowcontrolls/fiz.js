var num=7;
var res="";
// if(num % 3==0){
//    res+="fizz"
// }
// if(num % 5==0){
//     res+="buzz"
// }
// console.log(res);
var data=num%15==0?"fizz buzz":num%3==0?"fizz":"buzz"
console.log(data);