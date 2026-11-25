const express = require('express');
const router = express.Router();
const {createUser, getUser} = require('../controls/userControls.js');
const checkApiCall = require('../middleware/authMiddleware.js');

router.post('/create', checkApiCall, createUser);


router.get('/:id', getUser);


module.exports = router;