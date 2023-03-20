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


console.log(findPivot([3,4,5,6,7,8,9,11,21,1,2]))

