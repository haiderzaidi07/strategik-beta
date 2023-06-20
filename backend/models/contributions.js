const mongoose = require('mongoose')

const contributionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    fileName: {
        type: String,
        required: true,
    },
    pdf: {
        type: String,
        required: true,
    },
    cloudinaryID: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Contributions', contributionSchema)