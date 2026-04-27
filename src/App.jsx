import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

const STORAGE_KEY = "transactions";

function App() {
  const [transactions, setTransactions] = useState(() => {
    try {
      const storedTransactions = localStorage.getItem(STORAGE_KEY);
      return storedTransactions ? JSON.parse(storedTransactions) : [];
    } catch (error) {
      console.error("Error loading transactions from localStorage:", error);
      return [];
    }
  });

  const [selectedCategory, setSelectedCategory] = useState("");

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  function deleteTransaction(id) {
    setTransactions(transactions.filter((t) => t.id !== id));
  }

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem(STORAGE_KEY);
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  const filteredTransactions = selectedCategory
    ? transactions.filter((t) => t.category === selectedCategory)
    : transactions;

  return (
    <div className="app-shell">
      <Header />

      <main>
        <section className="welcome">
          <h1>Welcome to Finance Tracker</h1>
          <p>Track your income and expenses with ease.</p>
        </section>

        <section className="balance-container">
          <Balance transactions={transactions} />
        </section>

        <section className="transaction-form-container">
          <TransactionForm onAdd={addTransaction} />
        </section>

        <section className="transaction-list-container">
          <div className="transaction-filter">
            <label htmlFor="category-filter">Filter by category</label>
            <select
              className="form-control"
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All categories</option>
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

          <TransactionList
            transactions={filteredTransactions}
            onDelete={deleteTransaction}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;