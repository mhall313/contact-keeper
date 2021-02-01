//this syntax, rather tham import, is called common JS since we dont have typescript or babble set up
const express = require('express');

const app = express();

// app.get('/', (req, res) => res.json({msg: "welcome to CK API"}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));