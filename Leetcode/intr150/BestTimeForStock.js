function MaxProfit(prices) {
    let maxProfit = 0;
    let minPrice = Infinity;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else {
            maxProfit = prices[i] - minPrice > maxProfit ?
                prices[i] - minPrice : maxProfit
        }
    }

    return maxProfit
}


console.log(MaxProfit([9, 8, 9, 16, 1]));
