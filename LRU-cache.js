 /**
 * @param {number} capacity
 */

 class Node{
    constructor(key, value){
        this.key=key;
        this.val=value;
        this.next=this.prev=null;
    }
}

var LRUCache = function(capacity) {
    this.cap = capacity;
    this.cache = new Map()
    this.last = null
    this.first = null
    
    // this.first.next=this.first.prev=this.last
    // this.last.next=this.last.prev=this.first
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)){
        const data = (this.cache.get(key));
        this.remove(data);
        // this.cache.delete(key);
        this.insert(data);
        // this.cache.set(key, data);
        // console.log(this.cache)
        return data.val;
    }
    return -1;
};

LRUCache.prototype.remove = function(node){
    if(this.first===null)return;
    if(this.first===node){
        this.first=this.first.next;
        this.first.prev=this.last;
        this.last.next=this.first;
        }else{
            node.prev.next=node.next;
            node.next.prev=node.prev;
        }
    
    this.cache.delete(node.key)

}

LRUCache.prototype.insert = function(node){
    if(this.first===null && this.last===null){
        node.next=node;
        node.prev=node;
        this.first=node;
        this.last=node;
    }else{
        this.last.next=node;
        node.prev=this.last;
        this.last=this.last.next;
        node.next=this.first;
        this.first.prev=this.last;
    }
    
    this.cache.set(node.key, node);
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    //This is when we need to do some resets
    if(this.cache.has(key)){
        console.log('present');
        this.remove(this.cache.get(key))
    }
    
    const node = new Node(key, value);
    this.insert(node);

    if(this.cache.size>this.cap){
        //remove this.first from the lst
        // const lru = this.first.next;
        // this.remove(lru);
        this.remove(this.first);
    }

    console.log(this.cache);
    
};
