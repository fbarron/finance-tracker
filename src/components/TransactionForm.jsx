import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TransactionForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [category, setCategory] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !amount || !category) return;

    onAdd({
      id: uuidv4(),
      title,
      amount: Number(amount),
      category,
      date: new Date(date).toISOString(),
    });

    setTitle("");
    setAmount("");
    setCategory("");
  }

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="transaction-title">Transaction Title</label>
        <input
          className="form-control"
          id="transaction-title"
          placeholder="e.g. Salary, Rent, Groceries"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="transaction-category">Category</label>
        <select
          className="form-control"
          id="transaction-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="communication">Communication</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="education">Education</option>
          <option value="utilities">Utilities</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="transaction-amount">Amount</label>
        <input
          className="form-control"
          id="transaction-amount"
          type="number"
          step="0.01"
          placeholder="Use negative values for expenses"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="transaction-date">Date</label>
        <input
          className="form-control"
          id="transaction-date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;