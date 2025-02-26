
import multer from 'multer';
import { S3Client } from '@aws-sdk/client-s3';
import multerS3 from 'multer-s3';

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
    }
})

const checkFileType = (file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const filetypes = /jpeg|jpg|png|gif|pdf|epub/;
    const extname = filetypes.test(file.mimetype.split('/')[1]);
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Error: Images and pdf/epub files only!'));
    }
};

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME!,
        // acl: 'public-read',
        key: function (req: any, file, cb) {
            cb(null, /*req.user._id*/ 1111 + "/" + file.originalname);
        },
    }),

    // storage: multer.diskStorage({
    //     destination: function (req, file, cb) {
    //         cb(null, 'uploads/')
    //     },
    //     filename: function (req, file, cb) {
    //         cb(null, file.fieldname + '-' + Date.now() + file.originalname)
    //     }
    // }),

    // limits: { fileSize: 2000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
});

export default upload;


