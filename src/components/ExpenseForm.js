// ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [budget, setBudget] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!budget || isNaN(budget) || budget <= 0 || !description || !amount || isNaN(amount) || amount <= 0 || !category || !date) {
      // Display an error message for invalid or missing fields
      return;
    }

    onAddExpense({ budget, description, amount, category, date });
    // Clear form after submission
    setBudget('');
    setDescription('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Budget:
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </label>
      <label>
        Expense Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {/* Categories... */}
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Transportation">Transportation</option>
          <option value="School Fees">School Fees</option>
          <option value="Clothing">Clothing</option>
          <option value="Black Tax">Black Tax</option>
          <option value="Entertainment">Entertainment</option>

        </select>
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
