const express = require('express');
const router = express.Router();

//get is to fetch data
//post is submitting to the server
//put is to update on the server
//delete is to delete

// @route   POST  api/users
// @desc    Register a user
// @access  Public
router.post('/', (req, res) => {
    res.send('Register a user');
});

module.exports = router;