// var num=17;
// var flag=0;

// for(let i=2;i<num;i++){
//     if(num%i==0){
//         flag+=1;
//         break;
//     }
// }

// console.log(flag==0?"prime":"not prime");

var low=3,upper=18;
for(let i=low;i<=upper;i++){
    let flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag++;
            break;
        }
    }
    console.log(flag==0?i:"");
}