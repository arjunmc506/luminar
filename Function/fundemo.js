// function add(num,num1){
//     let res=num+num1;
//     return res;
// }
// console.log(add(10,11));

// function square(num){
//     return num**2
// }

// console.log(square(10));

function factorial(num){
    let fact=1;
    for(i=1;i<=num;i++){
        fact*=i;
    }
    return fact
}

console.log(factorial(5));