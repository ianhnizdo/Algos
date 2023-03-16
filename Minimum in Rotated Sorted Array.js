/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    let start = 0;
    let end = nums.length-1;

    if(nums[start]<nums[end]) return nums[start];
    // console.log('nope');


    while(start<end){
        const mid = Math.floor((start+end)/2);
        // console.log('start,', start)
        if(nums[start]<nums[end])break;
        else if(nums[mid]>nums[end]) start=mid+1;
        else if(nums[mid]<nums[end]) end=mid
    }
    return nums[start]
};


console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([3,1,2]));

console.log(findMin([]))