//phone-minus-btn, phone-input, phone-plus-btn, phone-price
// subtotal, tax, total

// phone: + button 
document.getElementById('phone-plus-btn').addEventListener('click', () => {
  const phonePrice =  QuantityPrice(true, 'phone-input', 'phone-price', 1219);
  
  //casePrice
  const casePriceElement = document.getElementById('case-price');
  const casePriceString = casePriceElement.innerText;
  const casePriceNumber = parseInt(casePriceString);
  
  // phonePrice + casePrice 
  const subTotal = phonePrice + casePriceNumber;
  const subtotalElement = document.getElementById('subtotal');
  subtotalElement.innerText = subTotal;
  
  // Tax : (subtotal * 10) / 100
  const taxString = ((subTotal * 10) / 100).toFixed(2);
  const tax = parseFloat(taxString);
  const taxElement = document.getElementById('tax');
  taxElement.innerText = tax;
  
  // total: subtotal + tax
  const total = subTotal + tax;
  const totalElement = document.getElementById('total');
  totalElement.innerText = total;
});

// phone: - button 
document.getElementById('phone-minus-btn').addEventListener('click', () => {
  const phonePrice =  QuantityPrice(false, 'phone-input', 'phone-price', 1219);

  //casePrice
  const casePriceElement = document.getElementById('case-price');
  const casePriceString = casePriceElement.innerText;
  const casePriceNumber = parseInt(casePriceString);
  
  // phonePrice + casePrice 
  const subTotal = phonePrice + casePriceNumber;
  const subtotalElement = document.getElementById('subtotal');
  subtotalElement.innerText = subTotal;

  // Tax : (subtotal * 10) / 100
  const taxString = ((subTotal * 10) / 100).toFixed(2);
  const tax = parseFloat(taxString);
  const taxElement = document.getElementById('tax');
  taxElement.innerText = tax;

  // total: subtotal + tax
  const total = subTotal + tax;
  const totalElement = document.getElementById('total');
  totalElement.innerText = total;
});


// closeBtn id: phone-close-btn
document.getElementById('phone-close-btn').addEventListener('click', () => {
  const phone = document.getElementById('phone');
  phone.style.display = 'none';
});