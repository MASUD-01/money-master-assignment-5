
document.getElementById('calculate-btn').addEventListener('click', function () {

    const incomeValue = document.getElementById('income')
    const getIncomeValue = incomeValue.value

    //check validation, only need number and ignore minus number
    if (isNaN(getIncomeValue) || getIncomeValue < 0) {
        alert('please, give only number')
    }
    else {

        //Expenses Value
        const foodValue = document.getElementById('food').value
        const rentValue = document.getElementById('rent').value
        const clothesValue = document.getElementById('cloth').value

        //total expenses calculation
        const totalExpensesValue = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue)
        const updateTotalExpensesValue = document.getElementById('total-expense')
        updateTotalExpensesValue.innerText = totalExpensesValue


        //calculate balance
        const totalBalanceCalc = parseInt(getIncomeValue) - totalExpensesValue
        const totalBalanceUpdate = document.getElementById('total-balance')
        totalBalanceUpdate.innerText = totalBalanceCalc

        if (getIncomeValue < totalExpensesValue) {
            alert('your have spend money more than your income')
        }
    }
})

document.getElementById('save-btn').addEventListener('click', function () {

    //calculate saving amount
    const incomeValue = document.getElementById('income')
    const getIncomeValue = incomeValue.value

    const savingValue = document.getElementById('saving').value
    const savingPercentage = (getIncomeValue * parseInt(savingValue) / 100)


    // update saving amount
    const savingAmount = document.getElementById('saving-amount')
    savingAmount.innerText = savingPercentage
    const totalBalance = document.getElementById('total-balance').innerText

    //validation, savingAmount not more than totalBalance
    if (totalBalance < savingAmount.innerText) {
        alert("you don't have enough money to saving")

    }

    //update remaining balance
    const remainingBalance = totalBalance - savingAmount.innerText
    const remainBalance = document.getElementById('remain-balance')
    remainBalance.innerText = remainingBalance

})