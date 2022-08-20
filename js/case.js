//case-minus-btn case-input case-plus-btn case-price
// Subtotal, tax, total

// case: + button 
document.getElementById('case-plus-btn').addEventListener('click', () => {
  const casePrice = QuantityPrice(true, 'case-input', 'case-price', 5);
  
  const phonePriceElement = document.getElementById('phone-price');
  const phonePriceString = phonePriceElement.innerText;
  const phonePriceNumber = parseInt(phonePriceString);

  const subTotal = casePrice + phonePriceNumber;

  const subtotalElement = document.getElementById('subtotal');
  subtotalElement.innerText = subTotal;

  // tax
  const tax = ((subTotal * 10) / 100);
  const taxElement = document.getElementById('tax');
  taxElement.innerText = tax;

  //total
  const total = subTotal + tax;
  const totalElement = document.getElementById('total');
  totalElement.innerText = total;
});

// case: - button 
document.getElementById('case-minus-btn').addEventListener('click', () => {
  const casePrice = QuantityPrice(false, 'case-input', 'case-price', 5);
  
  const phonePriceElement = document.getElementById('phone-price');
  const phonePriceString = phonePriceElement.innerText;
  const phonePriceNumber = parseInt(phonePriceString);

  const subTotal = casePrice + phonePriceNumber;

  const subtotalElement = document.getElementById('subtotal');
  subtotalElement.innerText = subTotal;

  // tax
  const tax = ((subTotal * 10) / 100);
  const taxElement = document.getElementById('tax');
  taxElement.innerText = tax;

  //total
  const total = subTotal + tax;
  const totalElement = document.getElementById('total');
  totalElement.innerText = total;
});


// closed button 
// phone-close-btn,  case-close-btn
document.getElementById('case-close-btn').addEventListener('click', function() {
  const caseCloseBtn = document.getElementById('case');
  caseCloseBtn.style.display = 'none';
});