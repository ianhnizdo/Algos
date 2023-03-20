//Note that finding the pivot point is the same as finding the minimum.

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

console.log('hi');

console.log(findPivot([3,4,5,6,7,8,9,11,21,1,2]))

// /*
// Step 1. Understand the Problem

// We are given a possibly sorted array.

// Our goal is to find the index where we would normally being this array if it was non rotated.

// The array rotation has end points brought to the beginning.

// Consequently the largest number could be right in the middle of the array.

// Smallest number will always be after the biggest.

// The array is meant to be in ascending order

// Step 2. Examples

// [3,4,5,1,2]

// Pivot point is at index 3. That would be where we would start if the array wasn't sorted.

// Step 3. Method

// We can do a brute force. Just search teh array until we reach a value that is less than the previous.

// A base condition would be to just check if the first entry is less than the last. That would mean we have a sorted non rotated array.

// The fact we need to remember is to start our search at index 1, and check every previous entry.

// The time complexity could at worst be O(n).

// Another way would be to use binary search

// Have a start at say 0
// Have the end be at the end of the array

// Now while start<=end



// Make our mid point based on the start and end values.

// If the midpoint value is greater than end then we have not hit our index. Move start up. The pivot is located more to the right.

// If midpoint is less than start then we should move our end back. it means the pivot is more towards the left side.

// If this loop goes on until we have start and end next to each other. Start will be greater than end, mid will equal start and be greater than end. return end.

