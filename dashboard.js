let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function addTransaction(type) {
  const amount = parseFloat(prompt(`Enter ${type} amount:`));
  if (!amount || amount <= 0) return alert("Enter a valid amount");

  const today = new Date().toLocaleDateString(); // e.g., "17/05/2025"
  const time = new Date().toLocaleTimeString();

  const entry = {
    type,
    amount,
    date: today,
    time
  };

  transactions.push(entry);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  renderDashboard();
}

function renderDashboard() {
  let income = 0, expense = 0;
  const container = document.getElementById("transactionContainer");
  container.innerHTML = "";

  const grouped = {};

  transactions.forEach(t => {
    if (t.type === 'income') income += t.amount;
    else expense += t.amount;

    if (!grouped[t.date]) grouped[t.date] = [];
    grouped[t.date].push(t);
  });

  document.getElementById('income').textContent = `Total Income: ₹${income}`;
  document.getElementById('expense').textContent = `Total Expense: ₹${expense}`;
  document.getElementById('balance').textContent = `Balance: ₹${income - expense}`;

  Object.keys(grouped).reverse().forEach(date => {
    const section = document.createElement('div');
    section.innerHTML = `<h4>${date}</h4>`;
    const ul = document.createElement('ul');

    grouped[date].forEach(t => {
      const li = document.createElement('li');
      li.textContent = `${t.time} - ${t.type.toUpperCase()}: ₹${t.amount}`;
      ul.appendChild(li);
    });

    section.appendChild(ul);
    container.appendChild(section);
  });
}

renderDashboard();
