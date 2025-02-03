/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 1
    for(i; i*i<=x; i++){
        if(i*i == x){
            return i
        }
    }
        return i-1 
};