
/*
search-2D-matrix.js

Leet code result: 

You are here!
Your runtime beats 92.02 % of javascript submissions

Source: https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/561/week-3-october-15th-october-21st/3497/

Problem: 
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix == null || matrix.length == 0) return false; //edge case 1
    
    let m = matrix.length, n = matrix[0].length; //define no. of rows (m), and no. of cols (n)

    if(matrix[0][0] > target) return false; //edge case 2 - target too small
    if(matrix[m-1][n-1] < target) return false; //edge case 3 - target too large
        
    //let's apply binary search to find the correct row and column
    let start = 0, end = m*n, midpoint;
    let counter = 0;

    while(end > start){
        //if(counter++ > m*n) break; //fail-safe for infinite loops, can't run more than m*n times

        midpoint = Math.floor((start+end)/2);// + 1;
        
        //console.log(`Start ${start}, End ${end}, Mid ${midpoint} `);
        
        let i = Math.floor(midpoint/n), j = midpoint % n;
        
        //console.log(`I ${i}, J ${j}, gives ${matrix[i][j]} `);
       
        if(target == matrix[i][j]) return true; // #GREEDY
        if(target < matrix[i][j])  end = midpoint;
        else start = midpoint + 1;
    }
    
    //if nothing's found
    return false;    
};
//Test using...
//searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]],33); 
