let totalBudget = 0;
let expenses = [];

function setBudget() {
    const budgetInput = document.getElementById('budget');
    totalBudget = parseFloat(budgetInput.value);
    budgetInput.value = '';
    updateSummary();
}

function addExpense() {
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

    if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
        expenses.push({ name: expenseName, amount: expenseAmount });
        document.getElementById('expenseName').value = '';
        document.getElementById('expenseAmount').value = '';
        updateTransactions();
        updateSummary();
    }
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateTransactions();
    updateSummary();
}

function updateSummary() {
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const currentBalance = totalBudget - totalExpenses;

    document.getElementById('totalBudget').textContent = `₹${totalBudget.toFixed(2)}`;
    document.getElementById('totalExpenses').textContent = `₹${totalExpenses.toFixed(2)}`;
    document.getElementById('currentBalance').textContent = `₹${currentBalance.toFixed(2)}`;
}

function updateTransactions() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${expense.name} - $${expense.amount.toFixed(2)}
            <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
        `;
        transactionList.appendChild(li);
    });
}
