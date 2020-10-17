/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const output = [];
     //The goal is to use backtracking to find all combinations.
    const findCombination = (remain, path, start) => {
      if (remain < 0) {
        console.log("LESS, Returning....");
        return;
      }
      if (remain === 0) {
        console.log("Found", path);
        output.push([...path]);
        return;
      }
      for (let i = start; i < candidates.length; i++) {
        // create a new path array to run the subroutine. It's
        // cleaner than pushing and then reseting the array in 
        // javascript.
        console.log(`i: ${i} find: Remain-Candidates[i] ${remain}-${candidates[i]} Path: ${[...path, candidates[i]]}  `)
        findCombination(remain - candidates[i], [...path, candidates[i]], i);    
      }
    }
    findCombination(target, [], 0);
    console.log("done", output);
    return output;
};

combinationSum([4,8,7,9,16,32], 41);
//combinationSum([2,3,6,7], 7);
//combinationSum([4,5,6], 16);
