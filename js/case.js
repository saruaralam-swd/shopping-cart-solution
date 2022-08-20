//case-minus-btn case-input case-plus-btn case-price
// Subtotal, tax, total

// case: + button 
document.getElementById('case-plus-btn').addEventListener('click', () => {
  const casePrice = QuantityPrice(true, 'case-input', 'case-price', 5);
  console.log(casePrice);
});

// case: - button 
document.getElementById('case-minus-btn').addEventListener('click', () => {
  const casePrice = QuantityPrice(false, 'case-input', 'case-price', 5);
  console.log(casePrice);
});