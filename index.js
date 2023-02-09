const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');
const DB = require('./Db');
const cors = require('cors');
// Load env vars
dotenv.config();

const app = express()
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 8000;

DB();

app.use('/', userRoute);

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});
