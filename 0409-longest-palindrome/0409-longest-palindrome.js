/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let sum = 0;
  let map = new Map()
  for(let i =0; i<s.length; i++){
    let ch = s.charAt(i);
    map.set(ch, (map.get(ch)|| 0)+1)
  }  
  for(let key of map.keys()){
    if(map.get(key)%2==0) sum += map.get(key)
    else if(map.get(key)>=3) sum += map.get(key)-1
  }
  if(s.length>sum)  return sum +1
  return sum
};