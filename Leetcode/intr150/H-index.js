var hIndex = function (citations) {
    citations.sort((a, b) => b - a); // Sort in descending order

    let hIndex = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            hIndex = i + 1;
        } else {
            break; // Stop early
        }
    }
    return hIndex;
};


console.log(hIndex([5, 6, 0, 0, 1]))