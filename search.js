let lyrics = 'tumi bondhu kala pakhi  ami jeno ki  boshnto kale tomay bolte pari ni. sada sada kala kala';

let search = 'PakhI'
let doesExist = lyrics.toLowerCase().includes(search.toLowerCase());
// console.log(doesExist);
// console.log(lyrics.indexOf('kala'));
if(lyrics.indexOf('sadaada')!==-1){
    // console.log("lyrics e ase");
}else{
    // console.log("index e nai");
}

// ! starts with
console.log(lyrics.startsWith('2mi'));

//? ends with
let fileName = '.pdf';
let otherFileName = '.png'
console.log(fileName.endsWith('.pdf'));