/*
 * useful resources
 * - https://www.freecodecamp.org/news/how-to-set-up-simple-image-upload-with-node-and-aws-s3-84e609248792/
 * - https://medium.com/@tewolfe2/5-steps-to-uploading-files-and-images-to-s3-in-react-using-express-superagent-multer-and-46a9e72244a2
 * - https://github.com/expressjs/multer
 *
 *
 * Note that you will need to copy .env-sample to .env and enter your AWS keys
 */
require('dotenv').config()
const express = require('express')
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

var s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    subregion: 'ap-southeast-2', //sydney
})

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'omhdemjpsd', //configure this in aws
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

const router = express.Router()

router.post('/upload', upload.single('my-upload-field', 3),(req, res) => {
  console.log(req.file)
  //req.file.location will have the url to access the image
  res.send('yay')
})

module.exports = router
