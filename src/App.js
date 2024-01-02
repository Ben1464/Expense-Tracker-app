import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addExpense = (newExpense) => {
    if (editIndex !== null) {
      const updatedExpenses = [...expenses];
      updatedExpenses[editIndex] = newExpense;
      setExpenses(updatedExpenses);
      setEditIndex(null);
    } else {
      setExpenses([...expenses, newExpense]);
    }
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const startEditExpense = (index) => {
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Expense Tracker App</h1>
      <ExpenseForm onAddExpense={addExpense} editIndex={editIndex} />
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} onStartEditExpense={startEditExpense} />
      <Footer />
    </div>
  );
};

export default App;