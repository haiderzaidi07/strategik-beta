const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    username: { 
        type: String, 
        unique: true,
        required: true, 
        index: true
    },
    email: { 
        type: String, 
        unique: true,
        required: true,
        index: true
    },
    password: { 
        type: String,
        required: true 
    },
    dashboardAccess: {
        type: Boolean,
        required: true
    }
})

UserSchema.statics.signUp = async function(username, email, password, confirmPassword){

  if(!username || !email || !password || !confirmPassword){
    throw Error("All fields must be filled")
  }
  
  if(!validator.isEmail(email)){
    throw Error("Please enter a valid email")
  }
  
  if(password !== confirmPassword){
    throw Error("Passwords do not match")
  }

  if(password.length < 6){
    throw Error("Password should be atleast 6 characters")
  }
  
  const emailExists = await this.findOne({ email })

  if(emailExists){
    throw Error("Email already in use")
  }
  
  const usernameExists = await this.findOne({ username })

  if(usernameExists){
    throw Error("Username already in use")
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = this.create({username, email, password: hashedPassword, dashboardAccess: false})

  return user
}

UserSchema.statics.login = async function(username, password){

  if(!username || !password){
    throw Error("All fields must be filled")
  }

  const user = await this.findOne({ username })

  if(!user){
    throw Error("Incorrect Username")
  }

  const match = await bcrypt.compare(password, user.password)

  if(!match){
    throw Error("Incorrect Password")
  }

  return user
}

module.exports = mongoose.model('User', UserSchema)
