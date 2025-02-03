/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
   let map = new Map()
    for(let i=0; i<names.length; i++){
        map.set(heights[i] ,names[i])
    }

    heights.sort((a,b)=> b-a)
    //height = [180, 170, 165]

    let ans = new Array(names.length)
    for(let i=0; i<ans.length; i++){
        ans[i] = map.get(heights[i])
    }
    return ans
};