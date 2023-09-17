const express = require('express');
const app = express();
const port = 3000; // You can choose any port you prefer

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

const todoList = []; // Array to store todo items

app.get('/', (req, res) => {
  res.render('index', { todoList });
});

app.post('/add', (req, res) => {
  const newItem = req.body.newItem;
  console.log(newItem);
  todoList.push(newItem);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});