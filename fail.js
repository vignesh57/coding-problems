

var threeSum = function(nums){
    
    
    if(nums)
    var total = nums.length;
    var total_executions = 0;
    var result = [];

    //atleast one negative value and one positve value is required, otherwise exit
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
        var _i = nums[i];
        if(_i > 0) break;

        //skip duplicates
        if(this_i == _i){
            continue;
        }

        var this_j = null;
        
        for(let j = total-1; j > i; j--){           
            var _j = nums[j];
            //skip duplicates
            if(this_j == _j){
                continue;
            }
            this_j = _j;
            var target =  0 - _i - _j;

            if(target > _j){
                break;
            }

            let index;
            if(target >= 0) index = pNums.indexOf(target, i+1);
            else index = index = nums.indexOf(target, i+1);
            if(target > MAX || target < MAX){ 
                continue;
            }

            if(index >= 0){                
                if(target >= 0)
                    result.push( [ _i , _j , pNums[index] ] );
                else
                    result.push( [ _i , _j , nums[index] ] );
            }
        
            
            //total_executions++;
        }
        
        this_i = _i;
    }
    console.log(total_executions, result);
    return result;
};
threeSum( [1,2,-2,-1] );