# Finance Tracker

This is a react app that lets users track their finances. I am developing this app to learn more about React and building full stack applications.

## Current functionality
- Add transactions with title, category, amount (use negative amounts for expenses). Each transaction stores a timestamp and a unique id generated with `uuid` API.
- Select a date when adding a transaction; dates are stored and displayed in the transaction list.
- View current balance (sum of all transactions) with positive/negative styling.
- List transactions with category labels and delete buttons.
- Filter transactions by category using the category selector.
- Persistent storage using `localStorage` to save transactions across sessions.

## Future features
- Edit transactions to update title, amount, or category.
- Implement Charts using `Chart.js` to visualise spending by category and over time.

## How to run
1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Project structure
- `src/components` — UI components: `Header`, `Footer`, `Balance`, `TransactionForm`, `TransactionList`.
- `src/App.jsx` — main app container and state management.
- `src/index.css` and `src/App.css` — global styles and app styles.
