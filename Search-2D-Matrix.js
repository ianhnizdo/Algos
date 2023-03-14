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
    // let length=matrix[0].length;
    // console.log(first,last);

    while(first<=last){
        let left=matrix[mid][0];
        let right = matrix[mid][matrix[mid].length-1];
        console.log(left, right);

        //if the right point is less than target we move first up.
        if(right<target){
            first=mid+1;
            mid=Math.floor((first+last)/2);
            }
        //if the left point is less than target we move the last matrix row down.;
        else if(left>target){
            last=mid-1
            mid=Math.floor((first+last)/2);
            }
        else if(left<target && target<right){
            console.log('test,', matrix[mid])
            const cur = matrix[mid]
            let left2 = 0;
            let right2=cur.length-1;
            let mid2 = Math.floor((left+right)/2);
            while(left2<right2){
                console.log(left2, right2);
                if(cur[mid2]===target || cur[left2]===target || cur[right2]===target) return true;
                else if(cur[mid2]<target){
                    console.log('move up left2,')
                    left2=mid2+1;
                    mid2=Math.floor((left+right)/2)
                }else if(cur[mid2]>target){
                    console.log('move up right2,');
                    right2=mid2-1;
                    mid2=Math.floor((left+right)/2);
                }
            }
            return false;
        }

    }
    return false;
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