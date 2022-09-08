//case-minus-btn case-input case-plus-btn case-price
// Subtotal, tax, total

// case: plus button 
document.getElementById('case-plus-btn').addEventListener('click', () => {
  const casePrice = QuantityPrice(true, 'case-input', 'case-price', 59); // 59

  // phonePrice
  // const phonePriceElement = document.getElementById('phone-price');
  // const phonePriceString = phonePriceElement.innerText;
  // const phonePriceNumber = parseInt(phonePriceString); // 1219

  const phonePriceNumber = stringToNumber();

  // casePrice + phonePrice
  const subTotal = casePrice + phonePriceNumber;  // 59 + 1219  = 1278
  const subtotalElement = document.getElementById('subtotal');
  subtotalElement.innerText = subTotal;

  // tax: (subtotal * 10)  / 100
  const taxString = ((subTotal * 10) / 100).toFixed(2); // ((1278 * 10 ) / 100) = 127.8
  const tax = parseFloat(taxString);
  const taxElement = document.getElementById('tax');
  taxElement.innerText = tax;

  //total: subtotal + tax
  const total = subTotal + tax; // 1278 + 127.8
  const totalElement = document.getElementById('total');
  totalElement.innerText = total;
});

stringToNumber = () => {
  const phonePriceElement = document.getElementById('phone-price');
  const phonePriceString = phonePriceElement.innerText;
  const phonePriceNumber = parseInt(phonePriceString);
  return phonePriceNumber;
}

// case: - button 
document.getElementById('case-minus-btn').addEventListener('click', () => {
  const casePrice = QuantityPrice(false, 'case-input', 'case-price', 59);

  const phonePriceNumber = stringToNumber();

  // casePrice + phonePrice
  const subTotal = casePrice + phonePriceNumber;
  const subtotalElement = document.getElementById('subtotal');
  subtotalElement.innerText = subTotal;

  // tax: (subtotal * 10)  / 100
  const taxString = ((subTotal * 10) / 100).toFixed(2);
  const tax = parseFloat(taxString);
  const taxElement = document.getElementById('tax');
  taxElement.innerText = tax;

  //total: subtotal + tax
  const total = subTotal + tax;
  const totalElement = document.getElementById('total');
  totalElement.innerText = total;
});


// closed button 
// phone-close-btn,  case-close-btn
document.getElementById('case-close-btn').addEventListener('click', function () {
  const caseCloseBtn = document.getElementById('case');
  caseCloseBtn.style.display = 'none';
});