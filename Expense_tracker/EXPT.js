document.getElementById('transaction-form').addEventListener('submit', addTransaction);

const balanceEl = document.getElementById('balance');
const moneyPlusEl = document.getElementById('money-plus');
const moneyMinusEl = document.getElementById('money-minus');
const transactionList = document.getElementById('transaction-list');

let transactions = [];

function addTransaction(e) {
    e.preventDefault();

    const type = document.getElementById('type').value;
    const text = document.getElementById('text').value;
    const amount = +document.getElementById('amount').value;
    const date = document.getElementById('date').value;

    const transaction = {
        id: generateID(),
        type,
        text,
        amount,
        date
    };

    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();
    document.getElementById('transaction-form').reset();
}

function generateID() {
    return Math.floor(Math.random() * 1000000);
}

function addTransactionDOM(transaction) {
    const sign = transaction.type === 'expense' ? '-' : '+';
    const item = document.createElement('li');
    item.classList.add(transaction.type);
    item.innerHTML = `
        ${transaction.text} <span>${transaction.date}</span> <span>${sign}₹${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `;

    transactionList.appendChild(item);
}

function updateValues() {
    const amounts = transactions.map(transaction => transaction.type === 'expense' ? -transaction.amount : transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    balanceEl.innerText = `₹${total}`;
    moneyPlusEl.innerText = `₹${income}`;
    moneyMinusEl.innerText = `₹${expense}`;
}

function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    init();
}

function init() {
    transactionList.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();
