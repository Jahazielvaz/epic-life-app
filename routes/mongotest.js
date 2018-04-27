const express = require('express');
const router = express.Router();

//get request
// path: api/mongotest/testing
router.get('/', (req, res) => res.json({coolText: 'This is my cool text!'}))


module.exports = router;
