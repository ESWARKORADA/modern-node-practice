
const createUser = (req, res)=>{
    const {userName, role} = req.body;

    if(!userName || !role){
        return res.status(400).json({message: "User Name and Role are required.."});
    }

    return res.status(200).json({
        id: 1,
        userName,
        role
    })
}

const getUser = (req, res)=>{
    const {id} = req.params;

    return res.status(200).json({id, name: 'Eswar Korada', source: 'Serverd from user contoller..'})
}

module.exports = {createUser, getUser};