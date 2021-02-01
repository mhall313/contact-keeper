//this syntax, rather tham import, is called common JS since we dont have typescript or babble set up
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// app.get('/', (req, res) => res.json({msg: "welcome to CK API"}));

//Connect Database
connectDB();

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));