const validatePriceRange = (min, max) => {
    const minVal = parseFloat(min);
    const maxVal = parseFloat(max);
  
    return !isNaN(minVal) && !isNaN(maxVal) && minVal <= maxVal;
  };
  
  module.exports = { validatePriceRange };
  