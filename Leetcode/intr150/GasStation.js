var canCompleteCircuit = function (gas, cost) {
    let startIndex = 0;  // Potential starting station
    let totalGas = 0;     // Total gas collected
    let totalCost = 0;    // Total cost required
    let tank = 0;         // Gas in the car at any point

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i]; // Add gas from station i
        totalCost += cost[i]; // Add cost to go to next station

        tank += gas[i] - cost[i]; // Update tank balance

        // If tank is empty (i.e., negative), reset starting index
        if (tank < 0) {
            startIndex = i + 1; // Set next station as start
            tank = 0; // Reset tank
        }
    }

    // If total gas is enough to cover total cost, return startIndex, else return -1
    return totalGas >= totalCost ? startIndex : -1;
};

gas = [1, 2, 3, 4, 5]
cost = [3, 4, 5, 1, 2]

console.log(canCompleteCircuit(gas, cost));





