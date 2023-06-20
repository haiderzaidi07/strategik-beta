const User = require('../models/users')
const Courses = require('../models/courses')
const Contribution = require('../models/contributions')
const Assignments = require('../models/assignments')
const Quizzes = require('../models/quizzes')
const MidsFinals = require('../models/midsfinals')
const { cloudinary } = require('../middleware/cloudinary')

module.exports = {
    getDashboard: async (req, res) => {
        const contributionsList = await Contribution.find()
        res.status(200).json(contributionsList)
    },
    createCourse: async (req, res) => {
        
        const { courseTitle, courseCode } = req.body

        try{
            await Courses.create({courseTitle, courseCode})
            res.status(200).json({message:"New course added successfully!"})
        }   
        catch(err){
            console.log(err)
        }
    },
    getContribute: async (req, res) => {
        const coursesList = await Courses.find().select('courseTitle courseCode')
        res.status(200).json(coursesList)
    },
    contributing: async (req, res) => {
        // console.log(req.body)
        // console.log(req.user)
        const { file, course, category, fileName } = req.body
        const { _id } = req.user

        try{
            const result = await cloudinary.uploader.upload(file, { upload_preset: 'obtprk2v' })
            // console.log(result)
            const { username } = await User.findOne({ _id }).select('username')

            await Contribution.create({
                name: username,
                course, 
                category,
                fileName,
                pdf: result.secure_url,
                cloudinaryID: result.public_id
            })

            res.status(200).json({ message: "Contribution added successfully "})
        }   
        catch(err){
            console.log(err)
        }
    },
    deleteContribution: async (req, res) => {
        // console.log(req.params)

        try {
            const { cloudinaryID } = await Contribution.findById(req.params.id).select('cloudinaryID');
            // console.log(cloudinaryID)
            // Delete image from cloudinary
            await cloudinary.uploader.destroy(cloudinaryID);
            // Delete document from db
            await Contribution.findByIdAndDelete(req.params.id);
            
            res.status(200).json({message:"Deleted contribution successfully"});
        } 
        catch (err) {
            console.error(err)
        }
    },
    approveContribution: async (req, res) => {
        // console.log(req.body)

        const { course, category, fileName, pdf, name } = req.body

        try{
            // Find course id of course which user has contributed to
            const courseID = await Courses.findOne({ courseCode: course }).select('_id')
            // console.log(courseID)
            
            if(category === 'Assignments'){

                // Save contribution to assignment collection
                await Assignments.create({
                    fileName,
                    fileLink: pdf,
                    courseID,
                    user: name
                })
                // Return 200 status response
                return res.status(200).json({ message: "Assignment added successfully "})
            }
            
            else if(category === 'Quizzes'){

                // Save contribution to quiz collection
                await Quizzes.create({
                    fileName,
                    fileLink: pdf,
                    courseID,
                    user: name
                })
                // Return 200 status response
                return res.status(200).json({ message: "Quiz added successfully "})
            }
            
            else if(category === 'MidsFinals'){

                // Save contribution to midfinal collection
                await MidsFinals.create({
                    fileName,
                    fileLink: pdf,
                    courseID,
                    user: name
                })
                // Return 200 status response
                return res.status(200).json({ message: "Mid/Final added successfully "})
            }
        }
        catch(err){
            console.log(err)
        }
    }
}