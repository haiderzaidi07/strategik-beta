const User = require('../models/users')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, {expiresIn: '3d'})
}

module.exports = {
    signUp: async (req, res) => {
        
        const { username, email, password, confirmPassword } = req.body
        
        try{
            const user = await User.signUp(username, email, password, confirmPassword)

            const token = createToken(user._id)            
            
            res.status(200).json({username, token, dashboardAccess: user.dashboardAccess})
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    },    
    login: async (req, res) => {
        
        const { username, password } = req.body
        
        try{
            const user = await User.login(username, password)
            
            const token = createToken(user._id)            

            res.status(200).json({username, token, dashboardAccess: user.dashboardAccess})
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
    },
}