import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    summary: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: [String],
        default: []
    },
    tags: {
        type: [String],
        required: true
    }
},{
    timestamps: true
});

const Idea = mongoose.model('Idea', ideaSchema);

export default Idea;