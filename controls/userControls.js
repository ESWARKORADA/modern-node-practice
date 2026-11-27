const dbPool = require('../config/db');

const createUser = async (req, res) => {

    try {
        const { userName, role } = req.body;

        if (!userName || !role) {
            return res.status(400).json({ message: "User Name and Role are required.." });
        }

        const query = 'INSERT INTO users (username, role) VALUES ($1, $2) RETURNING *';
        const result = await dbPool.query(query, [userName, role]);

        return res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ err, message: 'Internal Server Error' });
    }

}

const getUser = (req, res) => {
    const { id } = req.params;

    return res.status(200).json({ id, name: 'Eswar Korada', source: 'Serverd from user contoller..' })
}

module.exports = { createUser, getUser };