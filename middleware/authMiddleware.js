const checkApiCall = (req, res, next)=>{
    const api_key = req.headers['x-api-key'];
    console.log(api_key, process.env.API_KEY);
        if(!api_key || api_key !== process.env.API_KEY){
        return res.status(401).json({
            status : 'error',
            message : "Access Denied Invalid or missing Api Key"
        })
    }

    next();
}

module.exports = checkApiCall;