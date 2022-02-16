document.getElementById('calculate-btn').addEventListener('click', function () {

    // if ( == ' number') {
    //     alert('give')
    // }
    // else {
    const IncomeValue = document.getElementById('income')
    const getIncome = IncomeValue.value
    // console.log(getIncome)

    const foodValue = document.getElementById('food').value
    // console.log(foodValue)
    const rentValue = document.getElementById('rent').value

    const clothesValue = document.getElementById('cloth').value

    //total epenses calc
    const totalExpensesValue = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue)
    document.getElementById('total-expense').innerText = totalExpensesValue

    //calculate balance
    const totalBalanceCalc = parseInt(getIncome) - totalExpensesValue

    document.getElementById('total-balance').innerText = totalBalanceCalc

    // }


})

document.getElementById('save-btn').addEventListener('click', function () {

    const IncomeValue = document.getElementById('income')
    const getIncome = IncomeValue.value
    //% hisab
    const savingValue = document.getElementById('saving').value
    const savingPercentage = (getIncome * parseInt(savingValue) / 100)
    // show saving amount
    const savingAmount = document.getElementById('saving-amount')
    savingAmount.innerText = savingPercentage

    const totalBalance = document.getElementById('total-balance').innerText

    const remainingBalance = totalBalance - savingAmount.innerText

    //show remaining balance
    const remainBalance = document.getElementById('remain-balance')
    remainBalance.innerText = remainingBalance

    console.log(remainingBalance)
})