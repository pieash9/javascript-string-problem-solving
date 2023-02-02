function reversed(string){
    let reversedString='';
    for(let i = string.length-1;i>=0;i--){
        let element= string[i];
        reversedString = reversedString+element;
    }
    return reversedString;
}
let string = 'i am a good boy';
let reversedString= reversed(string);
console.log(reversedString);