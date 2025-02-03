/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) { 
      if(n==0) return 1.0
      let ans = 1
      if(n<0) ans =  1/solve(x,n)
      else ans = solve(x,n)
      return ans

};

function solve(x,n){
 
    if(n==0) return 1;
   let s= solve(x, parseInt(n/2))
    if(n%2==0) return s*s;
    return s*s*x
}