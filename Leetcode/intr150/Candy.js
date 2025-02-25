var candy = function (ratings) {
    let n = ratings.length
    let candies = Array(n).fill(1)

    // Right Left to Right Pass
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1
        }
    }
    // Right to Left Pass
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1)
        }
    }

    // Sum up all candies
    return candies.reduce((sum, num) => sum + num, 0);
};


console.log(candy([1, 3, 2, 2, 1]));
console.log(candy([1, 0, 2]));