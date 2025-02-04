/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set()
    while(true){
        let sum =0
        while(n>0){
            let dig = n%10;
            sum = sum + (dig*dig)
            n  = Math.floor(n/10)
        }
           if( sum === 1) return true
    if(set.has(sum)) break
    else set.add(sum) 
    n = sum
    sum = 0
    }

    return false
 
};