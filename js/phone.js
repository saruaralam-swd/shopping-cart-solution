//phone-minus-btn, phone-input, phone-plus-btn, phone-price
// subtotal, tax, total

// phone: + button 
document.getElementById('phone-plus-btn').addEventListener('click', () => {
  const phonePrice =  QuantityPrice(true, 'phone-input', 'phone-price', 10);
  console.log(phonePrice);
});

// phone: - button 
document.getElementById('phone-minus-btn').addEventListener('click', () => {
  const phonePrice =  QuantityPrice(false, 'phone-input', 'phone-price', 10);
  console.log(phonePrice);
});