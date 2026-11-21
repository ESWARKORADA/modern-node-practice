const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
    const { userName, role } = req.body;

    if (!userName || !role) {
        return res.status(400).json({ mesage: 'userName and role are required..' })
    }

    return res.status(200).json({
        id: 101,
        userName,
        role
    })
})


router.get('/:id', (req, res) => {
    const { id } = req.params;

    return res.status(200).json({
        id, name: 'Eswar Korada'
    })
})


module.exports = router;