const express = require('express');
const router = express.Router();

//get is to fetch data
//post is submitting to the server
//put is to update on the server
//delete is to delete

// @route   GET  api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', (req, res) => {
    res.send('get all contacts');
});

// @route   POST  api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
    res.send('Add contact');
});

// @route   PUT  api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

// @route   DELETE  api/contacts/:id
// @desc    delete contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;