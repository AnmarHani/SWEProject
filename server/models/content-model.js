const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    body: {
        text: {
            type: String
        },
        media: [{
            type: String
        }],
        links: [{
            type: String
        }]
    },
    points: {
        type: Number
    },
    tags: [{
        type: String
    }],
    createdAt: {
        type: Date, 
        default: Date.now
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    submit: [{
        reference: {
            type: String
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }]
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;