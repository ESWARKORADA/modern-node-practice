const express = require('express');
const router = express.Router();
const {createUser, getUser} = require('../controls/userControls.js')

router.post('/create', createUser);


router.get('/:id', getUser);


module.exports = router;