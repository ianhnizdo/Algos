/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

//This doesn't work in all test cases
/*
var minEatingSpeed = function(piles, h) {

    if(h === piles.length) return Math.max(...piles);
    
    let start = 1;
    let end = Math.max(...piles);
    let mid = Math.floor((start+end)/2);
    // console.log(mid);
    
    while(start<end){
    
    //keep track of bananna pile
    let sum=0;
    
    //i is our index
    let i =0;
    
    //j is our h
    let j=0;
    
    while(j<h && i<piles.length){
        sum+=mid;
        // console.log(piles[i], sum);
    
        if(sum>=piles[i]) {
            i++;
            sum=0
        }
        j++;
    }
    
    // console.log(i);
    if(i<piles.length){
        start+=1;
        mid=Math.floor((start+end)/2);
    }else if(j>piles.length){
        end-=1;
        mid=Math.floor((start+end)/2);
    }
    //Winning formula
    else break;
    
    }
    
    return mid;
    
    };
    
*/


var minEatingSpeed = function(piles, h) {

    const max = Math.max(...piles);
    
    if(h === piles.length) return max;
    
    let start = 1;
    let end = max;
    
    let r = end;
    // console.log(mid);
    
    while(start<end){
    
        const mid = Math.floor((start+end)/2);
        const getHour = hourSpend(mid, piles)
    
    }
    
        return r;
    
    };
    
    function hourSpent(mid, piles){
        let hours = 0;
        for(const pile of piles){
            hours+=Math.ceil(pile/mid);
        }
        return hours;
    }