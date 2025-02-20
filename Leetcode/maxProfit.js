function maxProfit (prices){
    let min_price = Infinity
    let max_Profit = 0
    for(let price of prices){
        if(price < min_price){
            min_price = price
        }else if(price - min_price > max_Profit){
            max_Profit = price - min_price
        }
    }
    return max_Profit
}

console.log(maxProfit([7, 8, 9, 16, 1]));
