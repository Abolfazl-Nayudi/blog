require('dotenv').config();

const express = require('express');
const db = require('./db/connectDB');
const blogRouter = require('./routes/blog.routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('home page');
});

app.use('/blog', blogRouter);

const PORT = process.env.PORT || 4000;

const start = async () => {
  await db(process.env.MONGO_URI);
  app.listen(PORT, () =>
    console.log(`the server is running on port ${PORT} and connected to db`)
  );
};

start();
