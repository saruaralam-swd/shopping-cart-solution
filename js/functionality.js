//case-minus-btn case-input case-plus-btn case-price
//phone-minus-btn, phone-input, phone-plus-btn, phone-price

function QuantityPrice(isIncrease, input, price, amount) {
  const caseNumberField = document.getElementById(input);
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);
  let newCaseNumber;

  if (isIncrease) {
    newCaseNumber = previousCaseNumber + 1;
  }
  else {
    newCaseNumber = previousCaseNumber - 1;
  }
  caseNumberField.value = newCaseNumber;

  const caseTotalPrice = document.getElementById(price);
  const currentPrice = newCaseNumber * amount;
  caseTotalPrice.innerText = currentPrice;
  return currentPrice;
}