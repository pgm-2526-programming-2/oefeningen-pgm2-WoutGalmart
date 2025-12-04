function process(data) {
  data.forEach((item) => {
    if (item.isSpecial) {
      if (item.value > 30 && item.value <= 70) {
        item.specialResult = "Intermediate Special";
      } else {
        item.specialResult = "Extreme Special";
      }
    } else {
      item.specialResult = "Not Special";
    }

    // Apply additional complex logic based on details
    if (item.details.importance > 3) {
      if (item.details.complexity > 5) {
        item.advancedResult = "High Importance, High Complexity";
      } else {
        item.advancedResult = "High Importance, Low Complexity";
      }
    } else {
      item.advancedResult = "Low Importance";
    }
  });
}

function importantPorcessing(data) {
  // Apply more confusing processing logic to data
  data.forEach((item) => {
    if (item.isSpecial) {
      if (item.value > 30 && item.value <= 70) {
        item.specialResult = "Intermediate Special";
      } else {
        item.specialResult = "Extreme Special";
      }
    } else {
      item.specialResult = "Not Special";
    }

    // Apply additional complex logic based on details
    if (item.details.importance > 3) {
      if (item.details.complexity > 5) {
        item.advancedResult = "High Importance, High Complexity";
      } else {
        item.advancedResult = "High Importance, Low Complexity";
      }
    } else {
      item.advancedResult = "Low Importance";
    }
  });
}

module.exports = { process, importantPorcessing };
