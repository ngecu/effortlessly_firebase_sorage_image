const admin = require('firebase-admin');
const serviceAccount = require('./'); //from firebase app service
require('dotenv').config()

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.NODE_PUBLIC_BUCKET // replace with your bucket name
  });

const bucket = admin.storage().bucket();
const localFilePath = './my_cow.png';
const destinationFilePath = 'photo.png';

bucket.upload(localFilePath, {
  destination: destinationFilePath
}).then(() => {
  console.log('File uploaded successfully!',destinationFilePath);
}).catch(err => {
  console.error('Error uploading file:', err);
});