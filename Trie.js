
//This almost works
var Trie = function() {

    this.cache=new Map();    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    //lets do it recursively
    
    //base case, we hit the end of our string.
    if(!word){
        this.cache.set('check',true);
        return
    };
    
    const first=word.slice(0,1);
    // const child = this.cach
    if(this.cache.has(first)){
        const obj = this.cache.get(first);
        obj.insert(word.slice(1));
    } else{
        this.cache.set(first, new Trie())
        
        this.cache.get(first).insert(word.slice(1));
    }
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    // console.log(this.cache);

    //If we do get to the end of the word this will check if it was previously searched or not
    if(!word){
        return this.cache.get('check')||false;
    }
    
    const first= word.slice(0,1);
    const child = this.cache.get(first) || null;

    //now to check the objects
    if(child){
        return child.search(word.slice(1));
    }

    return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    //If we do get to the end of the word this will check if it was previously searched or not
    if(!prefix){
        return true;
    }
    
    const first= prefix.slice(0,1);

    //now to check the objects
    if(this.cache.has(first)){
        return this.cache.get(first).startsWith(prefix.slice(1));
    }

    return false;

};
