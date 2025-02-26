

import { Book } from '../../models/books/book.model';

export const loadAllBooks = async (req: any, res: any) => {
    try {
        const books = await Book.find();
        res.status(200).json({ success: true, data: books });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}
