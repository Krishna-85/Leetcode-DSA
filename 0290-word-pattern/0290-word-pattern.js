/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let word = s.split(" ");
    if (pattern.length !== word.length) return false;

    let patternToWord = new Map();
    let wordToPattern = new Map();

    for (let i = 0; i < pattern.length; i++) {
        let ch = pattern.charAt(i);

        if (!patternToWord.has(ch)) patternToWord.set(ch, word[i]);
        if (!wordToPattern.has(word[i])) wordToPattern.set(word[i], ch);

        if (patternToWord.get(ch) !== word[i] || wordToPattern.get(word[i]) !== ch) return false;
    }

    return true;
};
