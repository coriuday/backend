const express = require('express');
const router = express.Router();

// Sample route for getting all projects
router.get('/', (req, res) => {
    res.json({ message: 'List of projects' });
});

// Sample route for creating a new project
router.post('/', (req, res) => {
    res.json({ message: 'Project created' });
});

// Add more project-related routes as needed

module.exports = router;
