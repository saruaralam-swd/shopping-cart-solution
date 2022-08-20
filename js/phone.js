//phone-minus-btn, phone-input, phone-plus-btn, phone-price
// subtotal, tax, total

// phone: + button 
document.getElementById('phone-plus-btn').addEventListener('click', () => {
  const phonePrice =  QuantityPrice(true, 'phone-input', 'phone-price', 10);

  // subtotal
  const casePriceElement = document.getElementById('case-price');
  const casePriceString = casePriceElement.innerText;
  const casePriceNumber = parseInt(casePriceString);
  
  const subTotal = phonePrice + casePriceNumber;
  
  const subtotalElement = document.getElementById('subtotal');
  subtotalElement.innerText = subTotal;

  // Tax
  // const tax = ((subTotal * 10) / 100);
  const tax = subTotal * 0.1;
  const taxElement = document.getElementById('tax');
  taxElement.innerText = tax;

  // total
  const total = subTotal + tax;
  const totalElement = document.getElementById('total');
  totalElement.innerText = total;
});

// phone: - button 
document.getElementById('phone-minus-btn').addEventListener('click', () => {
  const phonePrice =  QuantityPrice(false, 'phone-input', 'phone-price', 10);
  
  // subtotal
  const casePriceElement = document.getElementById('case-price');
  const casePriceString = casePriceElement.innerText;
  const casePriceNumber = parseInt(casePriceString);
  
  const subTotal = phonePrice + casePriceNumber;
  
  const subtotalElement = document.getElementById('subtotal');
  subtotalElement.innerText = subTotal;

  // Tax
  // const tax = ((subTotal * 10) / 100);
  const tax = subTotal * 0.1;
  const taxElement = document.getElementById('tax');
  taxElement.innerText = tax;

  // total
  const total = subTotal + tax;
  const totalElement = document.getElementById('total');
  totalElement.innerText = total;
});


// closed button 
// phone-close-btn,  case-close-btn
document.getElementById('phone-close-btn').addEventListener('click', () => {
  const phone = document.getElementById('phone');
  phone.style.display = 'none';
});