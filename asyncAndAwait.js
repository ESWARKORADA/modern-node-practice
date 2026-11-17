require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

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
        res.status(404).send({message: "both user name and role should sent"});
    }

    res.status(200).send({
        id: 101,
        name: userName,
        role: role,
        message: 'user Created Successfull..'
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})