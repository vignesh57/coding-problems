/*merge-sorted-arrays.js
https://www.interviewcake.com/question/javascript/merge-sorted-arrays?course=fc1&section=array-and-string-manipulation
const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/
var mergeArrays = function(A, B){
    //both arrays already sorted. 
    let a = 0, b = 0;
    let result=[];

    if(A == null && B == null)
    return [];
    if(A==null || A.length==0) return B;
    if(B==null || B.length==0) return A;

    //let count = (A.length != B.length) ? Math.min(A.length, B.length) : 
    for(var i=0; i < A.length+B.length; i++){
        if(a >= A.length) result[i] = B[b++];
        else if(b >= B.length) result[i] = B[b++];
        else result[i] = (A[a] < B[b]) ? A[a++] : B[b++];
    }
    return result;
}
const myArray     = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19,23,45];

console.log(mergeArrays(myArray, alicesArray));
console.log(mergeArrays([2, 4, 6, 8], [1, 7]));