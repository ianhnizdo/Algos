/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function(nums, target){
    let start =0;
    let end = nums.length-1;
    let pivot;

    console.log(nums[start],nums[end])
    //find out the pivot
    while(start<=end){
        const mid = Math.floor((start+end)/2);
        console.log(nums[mid])
        
        if(nums[mid]>nums[end]){
            start=mid+1
        }else if(nums[mid]<nums[start]){
            end=mid
        }
        start++
    }

    // console.log(pivot)
    return pivot
}
console.log('yes');

console.log(search([4,5,6,7,8,0,1,2], 3))
// console.log(search([4,5,6,7,8,1,2,3], 8))

/*

*/
// var search = function(nums, target) {
//     let start = 0;
//     let end= nums.length-1;

//     while(start<=end){
//         let mid = Math.floor((start+end)/2);
//         console.log(nums[mid]);
//         if(nums[start]===target)return start;
//         if(nums[end]===target) return end;
//         if(nums[mid]===target) return mid;

//         const abs1 = Math.abs(nums[start]-target);
//         const abs2 = Math.abs(nums[end]-target);

//         //closer to left
//         if(abs1<abs2) end=mid-1
//         else start=mid+1
//     }

//     //not present
//     return -1;
// };


/*
[4,5,6,7,0,1,2],0

Step 1. Understand the problem

We are trying to find out if a number is in a possibly rotated array that was sorted perfectly prior.

Our input is an array and a target.

Return the index of the target if it exists in the array or -1 if it doesn't.

Step 3. Method to solve

Brute force is a linear search through the array.

More advanced would be to do a binary search.

This would require a start and end variable

Keep looping as long as the start index is less than the end

Make a mid

Now we have to do some checks.

Check if the mid is less or greater than the end.
*/