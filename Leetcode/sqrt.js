var mySqrt = function(x) {
    // If x is 0 or 1, the square root is x itself
    if (x === 0 || x === 1) return x;

    let left = 1, right = x, answer = 0;

    // Perform binary search
    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // Find the middle value

        if (mid * mid === x) {
            // If mid * mid is exactly x, return mid (perfect square case)
            return mid;
        } else if (mid * mid < x) {
            // If mid * mid is less than x, store mid as potential answer
            // and search in the right half (higher values)
            answer = mid;
            left = mid + 1;
        } else {
            // If mid * mid is greater than x, search in the left half (lower values)
            right = mid - 1;
        }
    }

    // Return the largest integer whose square is <= x
    return answer;
};


console.log(mySqrt(64));

