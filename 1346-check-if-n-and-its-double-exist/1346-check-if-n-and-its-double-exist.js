/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
   arr.sort((a,b)=>a-b)
   for(let i =0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(i!=j &&2*arr[i]==arr[j])  return true
    }
   } 
   return false
};