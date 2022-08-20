//case-minus-btn case-input case-plus-btn case-price

function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById('case-input');
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);
  
  let newCaseNumber;

  if (isIncrease) {
   newCaseNumber = previousCaseNumber + 1;
  }
  else{
    newCaseNumber = previousCaseNumber - 1;
  }
  caseNumberField.value = newCaseNumber;

  
  const caseTotalPrice = document.getElementById('case-price');
  const currentPrice = newCaseNumber * 59;
  caseTotalPrice.innerText = currentPrice;
}

// case: plus button 
document.getElementById('case-plus-btn').addEventListener('click', () => {
  updateCaseNumber(true);
});

// case: minus button 
document.getElementById('case-minus-btn').addEventListener('click', () => { 
  updateCaseNumber(false);
});