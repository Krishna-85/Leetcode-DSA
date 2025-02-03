/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    let set = new Set()
    for(let i=0; i<words.length; i++){
        let str = words[i]
        let temp = ""
        for(let j=0; j<str.length; j++){
            let ch = str.charCodeAt(j)
            temp = temp + arr[ch-97]
            
        }
        set.add(temp)
    }
    return set.size;
};  