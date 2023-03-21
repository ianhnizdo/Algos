class TimeMap{
    constructor(){
        this.storage = new Map();
    };
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */

TimeMap.prototype.set = function(key, value, timestamp) {
    console.log(this.storage)
    const hash = this.storage;
    if(hash.has(key)){
        // console.log('key present', hash);
        const list = hash.get(key);
        list.push([value, timestamp]);
    }else{
        hash.set(key, [])
        hash.get(key).push([value,timestamp])
    }
    console.log(this.storage);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */

TimeMap.prototype.get = function(key, timestamp) {
    // console.log(this);
    const hash=this.storage;
    const list = hash.get(key);
    if(!list) return "";
    // console.log('continue');

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
    const closer= Math.abs(timestamp-start)>=Math.abs(timestamp-end) ? end : start;
    return list[closer][0];
};


// const timestamp = new TimeMap();
// timestamp.set('foo','bar',1)
// timestamp.set('foo','bar',3)
// timestamp.get('let', 1)
// console.log(timestamp.get('foo', 1));
// timestamp.set('foo', 'hope', 4);
// console.log(timestamp.get('foo', 2));

const test = new TimeMap();
test.set('love', 'high', 10);
// console.log(test);
test.set('love','low',20);
// console.log(test)

console.log(test.get('love', 5));
console.log(test.get('love', 10));
console.log(test.get('love', 15));
console.log(test.get('love', 20));
console.log(test.get('love', 25));