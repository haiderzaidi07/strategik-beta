const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const userRoutes = require('./routes/users')
const coursesRoutes = require('./routes/courses')
require('dotenv').config({path: './config/.env'})

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '50mb' }))

app.use('/', homeRoutes)
app.use('/courses', coursesRoutes)
app.use('/users', userRoutes)

connectDB()
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
  })
})
.catch(err => console.log(err))