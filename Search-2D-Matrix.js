/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    //check rows
    let first=0;
    let last=matrix.length-1;
    let mid = Math.floor((first+last)/2);

    while(first<last){
        let left=matrix[mid[0]];
        let right = matrix[mid[last]];
        
        //if the right point is less than target we move first up.
        if(right<target){
            first=mid+1;
             
            }
        //if the left point is less than target we move the last matrix row down.;
        if(left>target){
            end=mid-1
            };

    }
};


/*

Step 1. Understand the Problem

We are given an m x n integer matrix

It has two properties

Each row is sorted in non-decreasing order

The first integer of each row is greater than the last integer of the previous row. If we have an integer target return true iff it is in matrix or false otherwise.

The time complexity must be O(log(m*n))
m is the matrix length
n is each individual matrix's length

Do we assume that each matrix row is the same lenght? I would assume so

Step 3. Method

We have a bunch of rows filled with entries

My idea would be to loop through the matrix and check the edges

if left and right are less than target move to the next matrix row
If they are both greater we exit out and return false, the target is not there
if left<target<right we are in the row that may contain the entry at which point we can do a binary search

This would have a linear time complexity though

A better way would be to grab the first and last entry and check certain values. If one entry has the condition of left<target<right we search that.

Otherwise if both are greagter than gtarget we move to an earloier row, and if both are less we move to a later row. We would need to make sure this search does not have left>right

We would essentially need to split our search into two binaries


*/