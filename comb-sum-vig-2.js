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
MAX_MATCHES = Math.floor(target/MIN)
console.log(`MAX_MATCHES ${MAX_MATCHES}`);

var set_size =  MAX_MATCHES;
var T = [];

function populate(size){
console.log("[Populate] entering.");
T = [];
for(let i=0; i < size; i++ )
T.push(candidates[0]);
}

//var current_sum = current * T.length;
var current_index = 0;
var working_index = 0;
populate(set_size);

//start from highest number set
while(T.length >= 2){
    console.log(`Checking: ${T}`)
    //divides by zero, push and break
    if(target == sum(T)){
        result.push( T );
        console.log(`FOUND: ${T}`);
        //if(working_index >= candidates.length)
        --set_size;
        if(set_size * MAX < target) {
            console.log(`stop processing ${set_size} ${MAX} ${target}`);
            break;
        }
        populate(set_size);
        working_index = 0;
        current_index = 0;
        continue;
    }else if(sum(T) < target){
        //less than zero, continue
        //current_sum -= candidates[current_index];
        current_index++;
        //if(current_index < candidates.length) current_sum += candidates[current_index]; 
        //else {
        //console.log(`Current: ${current_index} Working: ${working_index} T: ${T} `);
        if(current_index < candidates.length){
        
            T[working_index] = candidates[current_index];
        }
        else{
            working_index++;
            current_index = 0;
            T[working_index] = candidates[current_index];
        }
        console.log(`LESS`); //, new T: ${T}
    }
    else{
        //greater than target, break
        --set_size;
        if(set_size * MAX < target) {
            console.log(`stop processing ${set_size} ${MAX} ${target}`);
            break;
        }
        populate(set_size);
        working_index = 0;
        current_index = 0;
        //if(working_index >= candidates.length) T.pop();
        //T[working_index] = candidates[current_index];
        console.log("HIGH");
    }

}

if(candidates.includes(target))
result.push([target]);

console.log(result);
return result;
};

combinationSum([4,8,7,9,16,32], 41);
//combinationSum([2,3,6,7], 7);
//combinationSum([4,5,6], 16);
