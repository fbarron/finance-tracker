import { useState } from "react";

function TransactionForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !amount) return;

    onAdd({
      id: Date.now(),
      title,
      amount: Number(amount),
    });

    setTitle("");
    setAmount("");
  }

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="transaction-title">Transaction Title</label>
        <input
          id="transaction-title"
          placeholder="e.g. Salary, Rent, Groceries"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="transaction-amount">Amount</label>
        <input
          id="transaction-amount"
          type="number"
          step="0.01"
          placeholder="Use negative values for expenses"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;