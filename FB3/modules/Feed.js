const mongoose = require('mongoose')
const { Schema } = require('mongoose')


const feedSchema = new Schema ({
    name : {
        type : String,
        required: true,
        min: [2, "Name must be longer than 2"],
        max: 25
    },
    message : {
        type: String,
        required: true,
        max: 40,
        min: [2, "Message must be longer than 2"]
    },
    date : {
        type: String,
        required: true
    }, 
}, {timestamps:true})

const Feed = mongoose.model('Feed', feedSchema)

module.exports = {
    Feed
}