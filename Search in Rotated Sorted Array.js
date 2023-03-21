/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function(nums, target){

    const pivot = findPivot(nums);

    const value = nums[pivot];
    console.log(value,target,pivot,nums);

    let start=0;
    let end=nums.length-1;

    if(nums[start]===target) return start;
    if(nums[end]===target) return end;

    if(target<=nums[end] && target>=value){
        console.log('left', value<target, value,target);
        start=pivot;
        end=nums.length-1;
    }else if(target>=value && target>=nums[start]){
        start=0;
        end=pivot;
    }
    console.log(start, end)

    while(start<end){
        const mid = Math.floor((start+end)/2);
        if(nums[start]===target) return start;
        if(nums[end]===target) return end;
        if(nums[mid]===target) return mid;

        if(nums[mid]<target){
            start=mid+1;
        }else{
            end=mid-1;
        }
    }
    return -1;
}

const findPivot = function(arr){

    let start = 0
    let end = arr.length-1;
    let pivot;

    //perfectly sorted
    if(arr[start]<arr[end]) return start;

    while(start<end){
        const mid = Math.floor((start+end)/2);
        console.log(start, mid, end);

        if(arr[start]<arr[end]){
            pivot=start;
            break;
        }

        if(arr[mid]>=arr[start] && arr[mid]>arr[end]){
            start=mid+1;
            pivot = start;
        } else if(arr[mid]<arr[end] && arr[mid]<arr[start]){
            end=mid;
            
        }
    }

    return pivot;
}

// console.log(search([4,5,6,7,8,0,1,2,3], 8))
// console.log(search([1],1))
console.log(search([8,9,2,3,4], 9))
console.log(findPivot([8,9,2,3,4]))
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