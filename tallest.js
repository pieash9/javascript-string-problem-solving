//! tallest height in a array
// function tallestPerson(heights) {
//   let largest = heights[0];
//   for (let i = 0; i < heights.length; i++) {
//     let element = heights[i];
//     if (element > largest) {
//       largest = element;
//     }
//   }
//   return largest;
// }
// let heights = [176, 165, 123, 233, 245, 456];
// let tallestPersonResult = tallestPerson(heights);
// console.log(tallestPersonResult, "is the tallest height");

function smallest(heights){
    let smallestHeight = heights[0];
    for(let i = 0;i<heights.length;i++){
        let element = heights[i];
        if(element<smallestHeight){
            smallestHeight=element;
        }
    }
    return smallestHeight;
}
let heights = [123,124,125,126,128,130,11];
let smallestHeightResult = smallest(heights);
console.log(smallestHeightResult); 
