

import { Book } from '../../models/books/book.model';

export const loadAllBooks = async (req: any, res: any) => {
    try {
        const books = await Book.find();
        res.status(200).json({ success: true, data: books });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const searchBooks = async (req: any, res: any) => {
    try {
        const { search } = req.query;
        const books = await Book.find({
            $or: [
                { title: { $regex: search, $options: 'i' } },
                { author: { $regex: search, $options: 'i' } },
                { genre: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
            ]
        });
        res.status(200).json({ success: true, data: books });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}


