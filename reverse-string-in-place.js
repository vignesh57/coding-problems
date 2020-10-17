//reverse-string-in-place.js
//https://www.interviewcake.com/question/javascript/reverse-string-in-place?course=fc1&section=array-and-string-manipulation


var reverseInPlace = function(A){
    let start = 0;
    let end   = A.length-1;
    for(let i=0; i < A.length/2; i++)
    {
        let temp = A[end]; A[end] = A[start]; A[start]=temp;
        start++; end--;
        console.log(input);
        //if(start > end) break;
    }

}

const input = ['v','i','g','n','e','s','h','d'];

reverseInPlace(input);

console.log(input);