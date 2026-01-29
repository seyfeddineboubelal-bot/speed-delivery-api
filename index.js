const express = require('express');
const app = express();

app.use(express.json());

let orders = [];

app.post('/order', (req, res) => {
  orders.push(req.body);
  res.json({ success: true, message: 'تم استلام الطلب' });
});

app.get('/orders', (req, res) => {
  res.json(orders);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running');
});
