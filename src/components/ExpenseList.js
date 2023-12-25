import React from 'react';

const ExpenseList = ({ expenses, onDeleteExpense, onStartEditExpense }) => {
  const totalExpenses = expenses.reduce(
    (total, expense) => total + parseFloat(expense.amount),
    0
  );

  return (
    <>
      <h2>Total Expenses: ${totalExpenses.toFixed(2)}</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description} - ${expense.amount} ({expense.category}) - {expense.date}
            <button onClick={() => onStartEditExpense(index)}>Edit</button>
            <button onClick={() => onDeleteExpense(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;