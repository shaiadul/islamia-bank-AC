// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    //get deposit amount by user
    let depositInput = document.getElementById('deposit-amount');
    let NewDepositAmountText = depositInput.value;
    let NewDepositAmount = parseFloat(NewDepositAmountText);
    //deposit total set
    let depositTotal = document.getElementById('deposit-total');

    let previousDepositText = depositTotal.innerText
    let previousDepositAmount = parseFloat(previousDepositText);

    let NewDepositTotal =parseFloat(previousDepositAmount)  + parseFloat(NewDepositAmount) ;

    depositTotal.innerText = NewDepositTotal;
    

    // ................update account balance
    let balanceTotal = document.getElementById('balance-total');

    let balanceTotalText = balanceTotal.innerText;
    let previousBalanceTotal = parseFloat(balanceTotalText);
    let newBalanceTotal = previousBalanceTotal + NewDepositAmount;

    balanceTotal.innerText = newBalanceTotal;
    //clear field
    depositInput.value= '';
})


// withdraw button handel
document.getElementById('withdraw-button').addEventListener('click',function(){
    let withdrawInput = document.getElementById('withdraw-amount');

    let withdrawAmountText = withdrawInput.value;
    let newWithdrawAmount = parseFloat(withdrawAmountText);

    //set withdraw total
    let withdrawTotal = document.getElementById('withdraw-total');

    let previousWithsrawText = withdrawTotal.innerText;
    let previousWithsrawTotal = parseFloat(previousWithsrawText);

    let newWithdrawTotal = previousWithsrawTotal + newWithdrawAmount;

    // set 
    withdrawTotal.innerText = newWithdrawTotal;

    //update balance
    let balanceTotal = document.getElementById('balance-total');

    let previousBalanceText = balanceTotal.innerText;
    let previousBalanceTotal = parseFloat(previousBalanceText);

    let newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText =newBalanceTotal;

    // clear
    withdrawInput.value = '';
});