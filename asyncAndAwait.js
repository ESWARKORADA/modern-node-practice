require('dotenv').config();
const userRoutes = require('./routes/userRoutes.js');
const requestLogger = require('./middleware/logger.js');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(requestLogger);
app.use('/api/users', userRoutes)
app.get('/api/health', (req, res)=>{
    res.status(200).json({
        status: "success",
        message: "My Modern Express server is running!",
        timestamp: new Date()
    })
})

app.post('/api/createUser', (req, res)=>{
    const {userName, role} = req.body;

    if(!userName || !role){
       return res.status(404).send({message: "both user name and role should sent"});
    }

    res.status(201).send({
        id: 101,
        name: userName,
        role: role,
        message: 'user Created Successfull..'
    })
})

app.get('/api/user/:id', (req, res)=>{
    const id = req.params.id;

    res.status(200).json({
        status: "success",
        message: `Featched details for the ID: ${id}`,
        data:{
            id: id,
            name: 'Eswar Korada',
            role: 'Super Admin',
            status: 'Active'
        }
    })
})

app.get('/api/search', (req, res)=>{
    const {role, city} = req.query;

    return res.status(200).json({
        message:'Filter applied',
        filterApplied: {
            role, city
        }
    })
})

const dbPool = require('./config/db.js');

app.get('/api/health', async (req, res) => {
    try {
        console.log('executed..')
        const result = await dbPool.query('SELECT NOW()'); 

        return res.status(200).json({
            status: "success",
            message: "Server & Cloud PostgreSQL Database are healthy!",
            dbTime: result.rows[0].now
        });
    } catch (error) {
        console.error("DB Error:", error.message);
        return res.status(500).json({
            status: "error",
            message: "Database connection failed!"
        });
    }
});

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})