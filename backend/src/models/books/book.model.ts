import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    userId: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User',
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    bookFile: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

export const Book = mongoose.model('Book', bookSchema);
