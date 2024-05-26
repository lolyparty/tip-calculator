const tipAmountParagraph = document.querySelector('#tip-amount');
const totalAmountParagraph = document.querySelector('#total-amount');
// console.log(tipPercentage)

const calculateTipBtn = document.querySelector('#calculate-tip');
calculateTipBtn.addEventListener('click', () => {
    let billAmount = document.querySelector('#bill-amount').value;
    let tipPercentage = document.querySelector('#tip-percentage').value;

    billAmount = parseFloat(billAmount);
    tipPercentage = parseFloat(tipPercentage);

    if (!isNaN(billAmount)) {
        const tipAmount = billAmount * tipPercentage;
        const totalAmount = billAmount + tipAmount;
        tipAmountParagraph.textContent = `Tip Amount: $${tipAmount}`;
        totalAmountParagraph.textContent = `Total Amount: $${totalAmount}`;

        document.querySelector('#bill-amount').value = '';
    } else {
        alert('Please input a valid number');
    }

})
