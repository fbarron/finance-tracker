function TransactionList({ transactions, onDelete }) {
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(amount);

  const categoryLabels = {
    food: "Food",
    transport: "Transport",
    communication: "Communication",
    entertainment: "Entertainment",
    health: "Health",
    education: "Education",
    utilities: "Utilities",
    other: "Other",
  };

  return (
    <div className="transaction-list">
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <p className="empty-state">No transactions yet. Add your first one above.</p>
      ) : (
        <ul>
          {transactions.map((t) => {
            const amountClass = t.amount >= 0 ? "amount-positive" : "amount-negative";

            return (
              <li key={t.id}>
                <span className="transaction-title">{t.title}</span>
                <span className="transaction-category">
                  {categoryLabels[t.category] || t.category}
                </span>
                <span className={`transaction-amount ${amountClass}`}>
                  {formatCurrency(t.amount)}
                </span>
                <button className="delete-button" onClick={() => onDelete(t.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;