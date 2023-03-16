/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */


var minEatingSpeed = function(piles, h) {

    const max = Math.max(...piles);
    
    if(h === piles.length) return max;
    
    let start = 1;
    let end = max;
    
    let r = end;
    
    while(start<=end){
    
        const mid = Math.floor((start+end)/2);
        const getHour = hourSpent(mid, piles);
    
    
        if(h<getHour){
            start=mid+1
        }else if(getHour<=h){
            end=mid-1
            r=mid
        }
    
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

    console.log(minEatingSpeed([3,6,7,11],8)) //should be 4
