var TimeMap = function() {
    const hash = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */

TimeMap.prototype.set = function(key, value, timestamp) {
    const hash = this.hash;
    if(hash.has(key)){
        const list = hash.get(key);
        list.push([value, timestamp]);
    }else{
        hash.set(key, [[value, timestamp]]);
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */

TimeMap.prototype.get = function(key, timestamp) {
    const hash=this.hash;
    const list = hash.get(key);
    if(!list) return "";


    let start = 0;
    let end = list.length-1;

    while(start<end){
        //Find midpoint
        const mid=Math.floor((start+end)/2);
        
        if(end-start===1)break;

        if(list[mid][1]===timestamp) return list[mid][0];
        if(list[start][1]===timestamp) return list[start][0]
        if(list[end][1]===timestamp) return list[end][0]

        if(list[mid][1]<timestamp) start=mid+1;
        else if(list[mid][1]>timestamp) end=mid-1;
    }
    const closer= Math.abs(timestamp-start)>Math.abs(timestamp-end) ? end : start;
    return list[closer][0];
};


TimeMap();
TimeMap.get()