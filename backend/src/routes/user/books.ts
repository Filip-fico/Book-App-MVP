
// Create book

import { Router } from 'express';
import { loadAllBooks } from '../../controllers/user/book.controller';
import { searchBooks } from '../../controllers/user/book.controller';

const router = Router();

// Get all books
router.get('/list', (req: any, res: any) => {
    loadAllBooks(req, res);
});

router.get('/search', (req: any, res: any) => {
    searchBooks(req, res);
});

export default router;