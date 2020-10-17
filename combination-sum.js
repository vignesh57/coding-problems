/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const sortedCandidates = candidates.filter(can => (can<=target))
            .sort((a,b) => b-a);

    combinationsMap = {};
    

    const calculateSameCombinations = (value) => {
        const times = target/value;
        let timesPtr = 1;
        while(timesPtr<=times) {
            const sum = value*timesPtr
            if(!combinationSum[sum]) {
                combinationSum[sum] = [];
            }
            combinationSum[sum].push(new Array(timesPtr).fill(value));
            timesPtr++;
        }
    }

    const calculateDiffCombinations = (value1, value2) => {
        const sum = value1+value2;
        const times = target/sum;
        let timesPtr = 1;
        while(timesPtr<=times) {
            const key = sum*timesPtr
            if(!combinationSum[key]) {
                combinationSum[key] = [];
            }
            const length = (timesPtr*2);
            const combination = new Array(length).fill(value1).fill(value2, length/2);
            combinationSum[key].push(combination);
            timesPtr++;
        }
    }



    for(let i=0; i<sortedCandidates.length; i++) {
        const value1 = sortedCandidates[i];
        calculateSameCombinations(value1);
        for(let j=i+1; j<sortedCandidates.length; j++) {
            calculateDiffCombinations(value1, sortedCandidates[j]);
        }
    }

    Object.keys(combinationSum).forEach(key => {
        console.log(`key: ${key} = ${JSON.stringify(combinationSum[key])}`);
    })

};

combinationSum([2,3,4, 6, 7, 8, 10], 16);