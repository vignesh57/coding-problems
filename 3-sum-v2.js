/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums){

    if(nums)
    var total = nums.length;
    var total_executions = 0;
    var result = [];
    
    if(nums && total < 2 || Math.min(nums) > 0 || Math.max(nums) < 0)
        return []; 
    
    nums = nums.sort( (a,b) => a - b);
    
    var MIN = nums[0];
    var MAX = nums[nums.length-1]

    var pNums=[]; 
    var nNums=[];
    var postive_start;

    var i = total-1;
    var j = 0;
    for(   ; i >= 0; i--){
        let num = nums[i];
        if(num >=0) pNums[j++] = num;
        else break;
    }
    nNums = nums.slice(0, i+1);
    postive_start = i;

    var this_i = null;
    for(let i = 0; i < total-2; i++){    

        if(nums[i] > 0) break;

        if(this_i == nums[i]){
            continue;
        }
        var this_j = null;
        for(let j = i+1; j < total; j++){           
            
            if(this_j == nums[j]){
                continue;
            }

            var target =  0 - nums[i] - nums[j];

            if(target < nums[i]){
                break;
            }

            let startPosition = (target >= 0) ? postive_start : j+1;            
            let index = nums.indexOf(target, startPosition);
            if(target > MAX) 
                continue;
            
            if(index > 0){
                result.push( [ nums[i] , nums[j] , nums[index] ] );
            }
        
            this_j = nums[j];
            total_executions++;
        }
        
        this_i = nums[i];
    }

};
