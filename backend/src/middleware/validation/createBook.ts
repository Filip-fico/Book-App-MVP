
import { body } from 'express-validator';

export const bookFieldsValidation = [
    body('title').isString().notEmpty(),
    body('author').isString().notEmpty(),
    body('description').isString().notEmpty(),
    body('genre').isString().notEmpty(),
];

export const bookFilesValidation = [
    body('coverImage').custom((value: any, validator: any) => {
        if (!validator.req.files?.coverImage![0]) {
            throw new Error('Cover image is required');
        }
        if (!validator.req.files?.coverImage![0].mimetype.includes('image')) {
            throw new Error('Cover image must be an image');
        }
        return true;
    }),

    body('bookFile').custom((value: any, validator: any) => {
        if (!validator.req.files?.bookFile![0]) {
            throw new Error('Cover image and book file are required');
        }
        if (!validator.req.files?.bookFile![0].mimetype.includes('pdf') && !validator.req.files?.bookFile![0].mimetype.includes('epub')) {
            throw new Error('Book file must be a pdf or epub');
        }
        return true;
    }),

];
