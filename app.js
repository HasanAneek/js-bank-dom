//login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
});

//deposit button event handler
const addDeposit = document.getElementById('addDeposit');
addDeposit.addEventListener('click',function(){
    const depositNumber = getInputNumber("depositAmount");

updateSpanText("currentDeposit",depositNumber);

updateSpanText("currentBalance",depositNumber);

document.getElementById('depositAmount').value = "";
});




//Withdraw button event handler
const addWithdraw = document.getElementById('addWithdraw');
addWithdraw.addEventListener('click',function(){
   const withdrawNumber = getInputNumber('withdrawAmount');

   updateSpanText("currentWithdraw",withdrawNumber);
   updateSpanText("currentBalance",-1* withdrawNumber);
   document.getElementById('withdrawAmount').value = ''; 
});



function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id,depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber ;

    document.getElementById(id).innerText = total;
}