function getMaxProfit(stockPrices) {
    let minPrice = stockPrices[0];
    let maxProfit = 0;
  
    for (let i = 0; i < stockPrices.length; i++) {
      const currentPrice = stockPrices[i];
  
      // Ensure minPrice is the lowest price we've seen so far
      minPrice = Math.min(minPrice, currentPrice);
  
      // See what our profit would be if we bought at the
      // min price and sold at the current price
      const potentialProfit = currentPrice - minPrice;
  
      // Update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  
    return maxProfit;
  }

  const stockPrices = [10, 7, 5, 8, 11, 9];

  getMaxProfit(stockPrices);