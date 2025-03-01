const express = require('express');
const router = express.Router();

// Sample route for getting all users
router.get('/', (req, res) => {
    res.json({ message: 'List of users' });
});

// Sample route for creating a new user
router.post('/', (req, res) => {
    res.json({ message: 'User created' });
});

// Add more user-related routes as needed

module.exports = router;
