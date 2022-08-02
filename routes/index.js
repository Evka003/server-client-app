const express = require('express') // Import express
const router = express.Router() // Create express router

// Create route for / (root)
router.get('/', (req, res) => {
    res.render('index') // Render index.ejs
})

// Export router for use in server.js
module.exports = router