import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Footer from './components/Footer';
import './App.css';

const API_URL = 'http://localhost:3001/api/expenses';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const addExpense = async (newExpense, editIndex) => {
    try {
      if (editIndex !== null) {
        await fetch(`${API_URL}/${expenses[editIndex].id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newExpense),
        });
        setEditIndex(null);
      } else {
        await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newExpense),
        });
      }

      fetchExpenses();
    } catch (error) {
      console.error('Error adding/editing expense:', error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      fetchExpenses();
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
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
