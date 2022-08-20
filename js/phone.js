//phone-minus-btn, phone-input, phone-plus-btn, phone-price
// subtotal, tax, total



document.getElementById('phone-plus-btn').addEventListener('click', () => {
  const phonePrice =  QuantityPrice(true, 'phone-input', 'phone-price', 10);

});

document.getElementById('phone-minus-btn').addEventListener('click', () => {
  const phonePrice =  QuantityPrice(false, 'phone-input', 'phone-price', 10);

});