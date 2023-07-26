// Initialize transactions array to store income and expenses
let transactions = [];

// Function to add a new transaction to the array
function addTransaction(description, amount, type) {
    transactions.push({ description, amount, type });
}

// Function to calculate the total balance
function calculateBalance() {
    let balance = 0;
    for (const transaction of transactions) {
        if (transaction.type === 'income') {
            balance += transaction.amount;
        } else if (transaction.type === 'expense') {
            balance -= transaction.amount;
        }
    }
    return balance;
}

// Function to update the UI with transactions and balance
function updateUI() {
    const transactionsList = document.getElementById('transactions');
    const balanceAmount = document.getElementById('balanceAmount');
    transactionsList.innerHTML = '';
    
    for (const transaction of transactions) {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.description} - ${transaction.amount}`;
        listItem.className = transaction.type;
        transactionsList.appendChild(listItem);
    }

    const balance = calculateBalance();
    balanceAmount.textContent = `${balance} INR`;
    balanceAmount.className = balance >= 0 ? 'income' : 'expense';
}

// Event listener for the add button
document.getElementById('addBtn').addEventListener('click', () => {
    const description = document.getElementById('description').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (description === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter valid values for description and amount.');
        return;
    }

    addTransaction(description, amount, type);
    updateUI();
});
