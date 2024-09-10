function calculateTotalSpentByCategory(transactions) {
    var result = {};
  
    for (var i = 0; i < transactions.length; i++) {
      var transaction = transactions[i];
      var category = transaction.category;
      var price = transaction.price;
  
      if (result[category]) {
        result[category] += price;
      } else {
        result[category] = price;
      }
    }
  
    var output = [];
    for (var category in result) {
      if (result[category]) {
        output.push({
          category: category,
          totalSpent: result[category],
        });
      }
    }
  
    return output;
  }