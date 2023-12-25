import React from 'react';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  const totalExpenses = expenses.reduce(
    (total, expense) => total + parseFloat(expense.amount),
    0
  );

  return (
    <>
      <h2>Total Expenses: Ksh {totalExpenses.toFixed(2)}</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description} - Ksh {expense.amount} ({expense.category}) - {expense.date}
            <button onClick={() => onDeleteExpense(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
