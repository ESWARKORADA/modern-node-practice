require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/health', (req, res)=>{
    res.status(200).json({
        status: "success",
        message: "My Modern Express server is running!",
        timestamp: new Date()
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})