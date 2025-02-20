function MaxProfit(prices){
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        if(prices[i] > prices[i-1]){
            maxProfit += prices[i] - prices[i-1]
        }
    }
    return maxProfit
}

console.log(MaxProfit([2, 1 , 6 , 1 , 1 , 1 , 2]));
