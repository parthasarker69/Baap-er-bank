function inputMoneyDollarMaker(inputId, value) {
    let inputText = '';
    if (value == 'value') {
        inputText = document.getElementById(inputId).value;
    }
    if (value == 'innerText') {
        inputText = document.getElementById(inputId).innerText;
    }
    const inputDollar = parseFloat(inputText);
    return inputDollar;
}

function updateBalanceBothAccount(dollar, previousDollar, totalBalance, credited) {
    if (credited == true) {
        if (dollar < 0) {

            alert('You cannot withdraw ammount that is not in ypur bap er account');
            document.getElementById('credited-amount').value = '';
            return;
        }
        const totalMoney = dollar + previousDollar;
        document.getElementById('previous-amount').innerText = totalMoney;
        const newTotalBalance = dollar + totalBalance;
        document.getElementById('total-balance').innerText = newTotalBalance;
        document.getElementById('credited-amount').value = '';

    }
    if (credited == false) {
        debugger;
        if (totalBalance < dollar || dollar < 0) {

            alert('You cannot withdraw ammount that is not in ypur bap er account');
            document.getElementById('withdraw-amount').value = '';
            return;
        }
        const totalMoney = dollar + previousDollar;
        document.getElementById('previous-withdraw-amount').innerText = totalMoney;
        const newTotalBalance = totalBalance - dollar;
        document.getElementById('total-balance').innerText = newTotalBalance;
        document.getElementById('withdraw-amount').value = '';
    }
}

document.getElementById('credit-button').addEventListener('click', function () {
    const creditedDollar = inputMoneyDollarMaker('credited-amount', 'value');
    const previousCreditedDollar = inputMoneyDollarMaker('previous-amount', 'innerText');
    const totalBalance = inputMoneyDollarMaker('total-balance', 'innerText');
    updateBalanceBothAccount(creditedDollar, previousCreditedDollar, totalBalance, true);
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawDollar = inputMoneyDollarMaker('withdraw-amount', 'value');
    const previousWithdrawDollar = inputMoneyDollarMaker('previous-withdraw-amount', 'innerText');
    const totalBalanceOne = inputMoneyDollarMaker('total-balance', 'innerText');
    updateBalanceBothAccount(withdrawDollar, previousWithdrawDollar, totalBalanceOne, false);
})