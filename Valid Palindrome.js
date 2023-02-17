/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length<=1) return true;

    // const filt = s.replace(/[^a-zA-Z]/g, '').toLowerCase().trim();
    // console.log(s, filt)
    
    let i=0;
    let j=s.length-1;

    while(i<=j){

        // console.log(left, right);

        if(!/[a-zA-Z0-9]/.test(s[i])){
            i++
        }
        else if(!/[a-zA-Z0-9]/.test(s[j])){
            j--;
        }
        else{
            if(s[i].toLowerCase() !== s[j].toLowerCase()) return false
            i++;
            j--;
        }

    }

    return true;

};
