//reverse-string-in-place.js
//https://www.interviewcake.com/question/javascript/reverse-words?course=fc1&section=array-and-string-manipulation

var reverseInPlace = function(A){
    let start = 0;
    let end   = A.length-1;
    for(let i=0; i < A.length/2; i++)
    {
        let temp = A[end]; A[end] = A[start]; A[start]=temp;
        start++; end--;
        //console.log(input);
        //if(start > end) break;
    }
    reverseWords(A);
}

var reverseWords = function(A){
    //TO DO individual words to be shuffled around
}

const input =  [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];

reverseInPlace(input);

console.log(input);