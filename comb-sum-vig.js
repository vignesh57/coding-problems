/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function sum(arr){
   // Getting sum of numbers
   return arr.reduce(function(a, b){
    return a + b;
   }, 0);
 }

var combinationSum = function(candidates, target){

if(candidates)
var total = candidates.length;
var total_executions = 0;
var result = [];

if(candidates && total < 2 || Math.min(candidates) > 0 || Math.max(candidates) < 0)
    return [];

candidates = candidates.sort( (a,b) => a - b);

console.log(candidates);

var temp = [];
var i = 0;
var oddA=[];
var evenA=[];
for(c in candidates){
    if(candidates[c] <= target){
       temp.push(candidates[c]); 
      
       if(candidates[c] % 2 == 0) evenA.push(candidates[c]);
       else oddA.push(candidates[c])
    }
}

candidates = temp;
console.log(candidates, oddA, evenA);

var MIN = candidates[0];
var MAX = candidates[candidates.length-1];
console.log(MIN, MAX);

var MAX_MATCHES; //find the largest possible combination
 //if(target % MIN == 0){
    MAX_MATCHES = Math.floor(target/MIN)
    //result.push(new Array( target/MIN ).fill(MIN) ); 
 //}
 /*else{
    let k = Math.floor(target/MIN) - 1;
    while(k > 0){
        console.log("K", k * MIN + candidates[1])
        if(k * MIN + candidates[1] <= target){
            MAX_MATCHES = k;
            break;
        }
        k--;
    }
 }*/
console.log(`MAX_MATCHES ${MAX_MATCHES}`);

for(let i = MAX_MATCHES; i >= 2; i--){
  
    let exit = false;
    for(let k = 0; k < candidates.length && !exit; k++){ 
       
        let find = candidates[k] * (i-1);
        
        for(let j = 0; j < candidates.length; j++){
            var _j = candidates[j];
            console.log(`Checking I: ${i} K: ${k} FIND: ${find} J: ${j} _J:${_j} | ${target} == ${find} + ${_j}`)
            //divides by zero, push and break
            if(target == find + _j){

                var res = new Array( i-1 ).fill(candidates[k]);
                res.push(_j);
                result.push( res );
                console.log(`FOUND I: ${i} K: ${k} FIND: ${find} J: ${j} _J:${_j}`);
                exit = true;
                break;
            }else if(target > find + _j){
                //less than zero, continue
                continue;
            }
            else{
            //greater than zero, break     
            exit = true;
            break;
            } 

        }
    }
}
if(candidates.includes(target))
result.push([target]);

//odd numbers

/*if(target % 2 == 1){
    for(var i = 0; i < oddA.length; i++){
        let _i = oddA[i];
        if( target == _i ){
            result.push([ _i ]); continue;
        }
        if(evenA.includes(target - _i))
        result.push([_i, target - _i]);
    }
}
*/

console.log(result);
};

//combinationSum([2,4,8,7,9,16,32,64,128,256,500], 41);
//combinationSum([2,3,6,7], 7);
combinationSum([2,4,5,6], 16);
