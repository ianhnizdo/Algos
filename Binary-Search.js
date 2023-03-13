var search = function(nums, target) {


    let left=0;
    let right =nums.length-1;
    let mid = Math.floor((right+left)/2)
    if(nums.length===1 && nums[0]===target) return 0;
    
    while(left<right){
        const cur = nums[mid];
        // console.log(cur);
        if(nums[left]===target) return left;
        if(nums[right]===target) return right;
    
        if(cur===target) return mid;
        else if(cur<target){
            left=mid+1;
            mid=Math.floor((right+left)/2)
            continue;
        }else if(cur>target){
            right=mid-1;
            mid=Math.floor((right+left)/2)
            continue;
        }
    }
    return -1;
    };
    
    /*
    Step 1. Understand the problem
    
    Our input is an array of integers SORTED in ascending order. We also have an integer target.
    
    Our goal is to find the target and return its index otherwise return -1.
    
    The algorithm must run in O(log n) time
    
    Brute force would be to search through the array and find the index and if its present return its index otherwise return -1.
    
    However this would run in O(n) time which is not what we want
    
    Teh way around this is to utilize a binary search.
    
    Step 3. Method
    
    Basically we will have right point
    a left point
    mid point
    
    Use a while loop, as long as left < right continue
    The mid must be right + left all divided by 2. Make sure to floor it to deal with decimals.
    now if our middle index, our pointers will be indexes. If our middle index is the target return middle.
    If middle index is less than target than move left to mid+1
    Otherwise our middle index is greater than the target so end becomes mid-1
    
    If at any point we have left>end and we haven't found our target then we exit out of the loop and return -1 indicating the entry is not present.
    
    */