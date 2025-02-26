
// Create book

import { NextFunction, Router } from 'express';
import { bookFieldsValidation, bookFilesValidation } from '../../middleware/validation/createBook';
import upload from '../../middleware/s3upload';
import { createBook, deleteBook } from '../../controllers/admin/book.controller';
import { loadAllBooks } from '../../controllers/user/book.controller';
import { validationResult } from 'express-validator';

const router = Router();

router.post('/create',
    // FIXME: First middleware uploads files to S3, need to fix the order so files should not be uploaded if validation fails
    upload.fields([
        { name: 'coverImage', maxCount: 1 },
        { name: 'bookFile', maxCount: 1 }
    ]),
    bookFieldsValidation,
    bookFilesValidation,
    (req: any, res: any, next: NextFunction) => {
        const result = validationResult(req);
        if (result.isEmpty()) {
            next()
        } else {
            console.log(result.array())
            return res.status(400).json({ errors: result.array() });
        }
    },
    createBook
);

// Get all books
router.get('/list', (req: any, res: any) => {
    loadAllBooks(req, res);
});

// Delete book
router.delete('/delete/:id', (req: any, res: any) => {
    deleteBook(req, res);
});

export default router;