function Balance({ transactions }) {
  const balance = transactions.reduce(
    (total, t) => total + t.amount,
    0
  );
  const balanceClass = balance >= 0 ? "amount-positive" : "amount-negative";
  const formattedBalance = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(balance);

  return (
    <div className="balance-card">
      <h2>Current Balance</h2>
      <p className={`balance-amount ${balanceClass}`}>{formattedBalance}</p>
    </div>
  );
}

export default Balance;