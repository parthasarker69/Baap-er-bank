document.getElementById('credit-button').addEventListener('click', function () {
    const creditedAmount = document.getElementById('credited-amount');
    const creditedAmountTaka = parseFloat(creditedAmount.value);

    const previousAmount = document.getElementById('previous-amount');
    const previousAmountTaka = parseFloat(previousAmount.innerText);

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceTaka = parseFloat(totalBalance.innerText);

    const creditedAmountTotal = creditedAmountTaka + previousAmountTaka;
    previousAmount.innerText = creditedAmountTotal;

    const totalBalanceAdded = totalBalanceTaka + creditedAmountTaka;
    totalBalance.innerText = totalBalanceAdded;



    creditedAmount.value = '';
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    const creditedAmount = document.getElementById('withdraw-amount');
    const creditedAmountTaka = parseFloat(creditedAmount.value);

    const previousAmount = document.getElementById('previous-withdraw-amount');
    const previousAmountTaka = parseFloat(previousAmount.innerText);

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceTaka = parseFloat(totalBalance.innerText);

    const creditedAmountTotal = creditedAmountTaka + previousAmountTaka;
    previousAmount.innerText = creditedAmountTotal;

    const totalBalanceAdded = totalBalanceTaka - creditedAmountTaka;
    totalBalance.innerText = totalBalanceAdded;



    creditedAmount.value = '';
})