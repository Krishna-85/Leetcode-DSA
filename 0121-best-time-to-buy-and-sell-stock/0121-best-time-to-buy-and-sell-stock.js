/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0] , maxProfit = 0
    for(let i=0; i<prices.length; i++){
        min = Math.min(min, prices[i])
        let profit = prices[i] -min
        maxProfit =Math.max(profit, maxProfit)
    }
    return maxProfit
};