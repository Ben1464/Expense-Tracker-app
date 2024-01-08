// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = 3001;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === 'POST') {
    // Assign a unique id for new expenses
    req.body.id = Date.now();
  }
  next();
});

// Custom route to handle updating expenses
server.put('/api/expenses/:id', (req, res) => {
  const expenseId = parseInt(req.params.id);
  const updatedExpense = req.body;

  // Load the current expenses
  const expenses = router.db.get('expenses').value();

  // Find the index of the expense with the given id
  const index = expenses.findIndex(expense => expense.id === expenseId);

  // If found, update the expense
  if (index !== -1) {
    expenses[index] = { ...expenses[index], ...updatedExpense };
    router.db.set('expenses', expenses).write();
    res.json(expenses[index]);
  } else {
    res.sendStatus(404);
  }
});

// Start the JSON Server
server.use('/api', router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
