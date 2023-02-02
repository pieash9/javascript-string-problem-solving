function reversed(string){
    let words = string.split(' ');
    let result= [];
    for(let i=words.length-1;i>=0;i--){
        let element = words[i];
        result.push(element)
    }
    let reversedSentence = result.join(' ');
    return reversedSentence;
}
let string = 'I am a bad boy';
let reversedResult=reversed(string);
console.log(reversedResult);