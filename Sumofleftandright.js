/*
Given an array of numbers find the sum on the left side and the sum on the right
*/

function treeSum(arr){
    let left=0
    let right=0

    let row = 2;
    let copy = row;
    let half = row/2;
    
    for(let i=1; i<arr.length; i++){
        const num=arr[i]
        if(copy>half){
            left+=num
            copy--
        }else if(copy<=half){
            right+=num
            copy--
        }
        if(copy===0){
            row=row*2;
            copy=row;
            half=copy/2
        }
    }

    console.log(left,right)
    return left>right ? 'left' : 'right';
}

console.log(treeSum([1,2,3,4,5,6]));
//2+4+5+8+9
console.log(treeSum([1,2,3,4,5,6,7,8,9,10,11,12]))

/*
[1,2,3,4,5,6,7]
                       1
               2[1]       |        3[2]               length is 2, multipy length of each row by 2
          4[3]      5[4]  |    6[5]      7[6]            length is 4, easy way is 
8[7] 9[8] 10[9] 11[10]    | 12[11] 13[12] 14[13] 15[14]         length is 8
[15][16][17][18][19][20]  | [21][22][23][24][25][26]    length is 16, half is 8


What if we just make a counter for how many times we add to left before going right

row=2
half=row/2

Essentially have some sort of counter
Make row
have a copy of row
have a half variable

if copy>half
add to left
decrement copy

otherwise add to right
decrement

if it hits zero
make row equal to itself times 2
copy equals row
then half equals copy/2 or row/2 doesn't matter

We would still need a left value and a right value
At the eend compare which is greater

*/