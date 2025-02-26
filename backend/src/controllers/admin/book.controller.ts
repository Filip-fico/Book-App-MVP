

import { Book } from '../../models/books/book.model';

export const createBook = async (req: any, res: any) => {
    const { title, author, genre, description } = req.body;
    const coverImage = req.files?.coverImage![0].location;
    const bookFile = req.files?.bookFile![0].location;

    try {

        console.log(title, author, genre, description, coverImage, bookFile);

        const book = await Book.create({
            userId: req.user?._id || 1111,
            title,
            author,
            genre,
            description,
            coverImage,
            bookFile
        });
        res.status(201).json({ success: true, data: book });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteBook = async (req: any, res: any) => {
    const bookId = req.params.id;

    try {
        const book = await
            Book.findByIdAndDelete(bookId);
        if (book) {
            res.status(200).json({ success: true });
        }
        else {
            res.status(404).json({ success: false, message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}