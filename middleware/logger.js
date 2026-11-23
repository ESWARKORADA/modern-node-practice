const requestLogger = (req, res, next)=>{
    const time = new Date().toLocaleDateString();
    console.log(`[${time}] ${req.method} request received at ${req.originalUrl}`);

    next();
}

module.exports = requestLogger;