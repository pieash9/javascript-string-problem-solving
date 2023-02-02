let num1 = 20;
let num2 =30;
let num3 =40;

function max2(num1,num2,num3){
    let result1 = Math.max(num1,num2,num3);
    return result1;
}
// console.log(max2(20,30,40),'is max');

function min2(num1,num2,num3){
    let result2 = Math.min(num1,num2,num3);
    return result2;
}
// console.log(min2(10,20,30),'is min');

function min(num1,num2,num3){
    if(num1<num2 & num1<num3){
        return num1;
    }else if(num2<num1 && num2<num3){
        return num2;
    }else{
        return num3;
    }
}
let minResult = min(20,30,40);
console.log(minResult,'is min');

// function max(num1,num2,num3){
//     if(num1>num2 && num1>num3){
//         console.log(num1, 'is max');
//     }else if(num2>num1 &&num2>num3){
//         console.log(num2,'is max');
//     }else{
//         console.log(num3 ,'is max');
//     }
// }
// max(20,30,40);