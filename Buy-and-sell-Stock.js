/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let maxProfit = 0;
    
    let max=-Infinity;
    let min=Infinity;
    
    for(let i =0; i<prices.length; i++){
        const cur = prices[i];
    
        //now for the updates
        if(cur>max) max=cur;
        if(cur<min){
            min=cur;
            max=cur;
        }
        maxProfit=Math.max(maxProfit, max-min);
    }
    return maxProfit;
    };
    
    
    
    /*
    
    Step 1. Understand the problem
    We are given an array of prices
    prices[i] is the price of a given stock on the ith day.
    We want to find the best time to buy and sell stock. Choose a single day to buy stock and what day to sell it.
    
    Basically find what day is best to make max profit. Selling price - buying price
    
    Step 3. Method
    
    Brute force would be to find every possible profit
    first loop to find the buying price for a single stock entry
    second loop would be to find the selling price for the buying price
    
    Then you would update a max variable outside every time you find a greater value from selling price-buying price
    
    Once you have completed the first loop, you just return max
    
    This has O(n^2) time complexity though
    
    Another way is to consider that we must go left to right
    
    Lets make a max profit variable
    
    lets make a minBuy and maxSell variable set to Infinity and -Infinity
    
    Loop through the arra
    
    We need to consider how to update things.
    
    If its a larger max than we can upddate the max. However if we hit a smaller value to purchase our stock we need to reset our max  based on whats AFTER THE MIN Value.
    
    So loop throughl
    update the min and max accordingly
    
    if we update the max but the min is the same, we just update and see if the difference is a greater max profit
    
    Otherwise if the min is reset we update the min and the max to the index value
    
    Then we continue to move forward updating the max and max profit, or min and max accordingly
    
    */