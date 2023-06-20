const Courses = require('../models/courses')
const Assignments = require('../models/assignments')
const Quizzes = require('../models/quizzes')
const MidsFinals = require('../models/midsfinals')

module.exports = {
    getCourses: async (req, res) => {
        try {
            const coursesList = await Courses.find()
            res.status(200).json(coursesList)
        }
        catch (err) {
            console.log(err);
        }
    },
    getAssignments: async (req, res) => {
        try {
            const assignmentsList = await Assignments.find({ courseID: req.params.id })
            res.status(200).json(assignmentsList)
        }
        catch (err) {
            console.log(err);
        }
    },
    getQuizzes: async (req, res) => {
        try {
            const quizzesList = await Quizzes.find({ courseID: req.params.id })
            res.status(200).json(quizzesList)
        } catch (err) {
            console.log(err);
        }
    },
    getMidsFinals: async (req, res) => {
        try {
            const midsFinalsList = await MidsFinals.find({ courseID: req.params.id })
            res.status(200).json(midsFinalsList)
        } catch (err) {
            console.log(err);
        }
    }
}