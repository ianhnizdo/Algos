var findDuplicate = function(nums) {
    const map = new Map()
  
    for(let i=0; i<nums.length; i++){
        const cur = nums[i];
  
        if(map.has(cur)) {
            return map.get(cur);
            }
          map.set(cur, cur);
    }
  }

var findDuplicate2 = function(nums) {
    
    for(let i=0; i<nums.length; i++){
        const cur = nums[i];
        for(let j=i+1;j<nums.length; j++){
            if(nums[j]===cur) return nums[j]
        }
    }

}  