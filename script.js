function mincost(arr)
{ 
//write your code here
// return the min cost
	 // Convert the input array to a min heap
    arr = [...arr];
    arr.sort((a, b) => a - b);

    // Initialize the total cost
    let totalCost = 0;

    // Continue until there is only one rope left
    while (arr.length > 1) {
        // Extract the two smallest ropes from the array
        const rope1 = arr.shift();
        const rope2 = arr.shift();

        // Calculate the cost of merging these two ropes
        const cost = rope1 + rope2;

        // Add the cost to the total cost
        totalCost += cost;

        // Add the merged rope back to the array
        arr.push(cost);

        // Re-sort the array to maintain the min heap property
        arr.sort((a, b) => a - b);
    }

    return totalCost;
  
}

module.exports=mincost;
