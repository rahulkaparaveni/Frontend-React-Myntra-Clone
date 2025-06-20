const express = require('express');
const cors = require('cors');

const itemsRouter = require('./routes/itemsRouter');

const app = express();

// app.use(express.json());
app.use(cors());
app.use(itemsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
