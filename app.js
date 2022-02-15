function increaseNumber(product, resiveBolianNumber, price){
    // debugger;
    const inputField = document.getElementById(product + '_number');
    let inputValue = parseInt(inputField.value);
    if(resiveBolianNumber == true){
        inputValue = inputValue  + 1;
    }
    else if(inputValue > 0){
        inputValue = inputValue  - 1;
    }
    inputField.value = inputValue;

    const priceValue = document.getElementById(product + '_price');
    priceValue.innerText  = price * inputValue;
    console.log(priceValue);
    calculateTotal();
}
function calculateTotalExtra(product){
    const productTotal = document.getElementById(product +'_number');
    const productTotalValue = parseInt(productTotal.value);

    return productTotalValue;
}
function calculateTotal(){
    
    const phoneTotalPrice = calculateTotalExtra('phone') * 1219;
    const casTotalPrice = calculateTotalExtra('case') * 59;
    let subTotal = phoneTotalPrice + casTotalPrice;
    let tax = subTotal / 5;
    let total = subTotal + tax;
    // return subTotal;
    document.getElementById('mainSub_Total').innerText = subTotal;
    document.getElementById('tax_Total').innerText = tax;
    document.getElementById('main_Total').innerText = total;

    console.log(subTotal);


}
// On the has function
// Phone Price 
document.getElementById('phone_plus').addEventListener('click', function (){
    increaseNumber('phone',true, 1219);
});
document.getElementById('phone_minus').addEventListener('click', function (){
    increaseNumber('phone',false, 1219);
});

// Case price 
document.getElementById('case_plus').addEventListener('click', function (){
    increaseNumber('case', true, 59);
});
document.getElementById('case_minus').addEventListener('click', function() {
    increaseNumber('case', false, 59);
});
