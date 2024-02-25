const path = require('path');
const router = require('express').Router();

// HTML routes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// If no matching route is found default to home
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Export HTML routes
module.exports = router;
