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
          <TransactionList transactions={transactions} onDelete={deleteTransaction} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;