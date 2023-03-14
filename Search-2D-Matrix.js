/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    let first = 0;
    let last = matrix.length-1;
    let mid = Math.floor((first+last)/2);
    
    while(first<=last){
        const start=matrix[mid][0];
        const end=matrix[mid][matrix[mid].length-1];
        console.log(start,end)
        if(target>end){
            first=mid+1
            mid=Math.floor((first+last)/2);
        }else if(target<start){
            last=mid-1;
            mid=Math.floor((first+last)/2);
        }else{
            break;
        }
    }

    console.log(mid);

    if(!matrix[mid])return false;

    let row = matrix[mid]
    let left = 0;
    let right=row.length-1;
    // console.log(left,right);

    let mid2= Math.floor((left+right)/2)
    while(left<=right){
        
        // console.log(mid[left], mid[mid2], mid[right]);

        if(row[mid2]===target || row[left]===target || row[right]===target) return true;
        else if(row[mid2]>target){
            console.log('move down')
            right=mid2-1;
            mid2=Math.floor((left+right)/2);
        }else if(row[mid2]<target){
            // console.log('move up')
            left=mid2+1;
            mid2=Math.floor((left+right)/2);
        }
    }

    return false;

};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 34))
console.log(searchMatrix([[1]],3))
console.log(searchMatrix([[1],[3]], 3))

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

If you flattened the rows you would have a normal binary search. All you need to do is just do a double binary search.

Find a row that has a start smaller than the target and an end greater than the target and check if you target is in that array using another binary search.

*/