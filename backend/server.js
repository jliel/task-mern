const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./connect/database');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

connectDB();
const app = express();

const bp = require('body-parser');

app.use(bp.json());
app.use(bp.urlencoded({extended:false}));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`server listening on ${port}`));