import express from 'express';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv' 
import cors from 'cors'

import userRoute from './db/routes/registerRoute.js';
dotenv.config()
const app = express();

const DB_URL = process.env.NODE_ENV === 'prod' ? process.env.DB_URL : process.env.DB_LOCAL

const connectToMongoDB = () => {
  mongoose.connect(DB_URL);

  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('MongoDB connection error:', error)
    setTimeout(connectToMongoDB, 20000);
  });

  db.once('open', () => {
    console.log('Connected to MongoDB!');
  });
};

connectToMongoDB();
const PORT = process.env.PORT || 3000;


// var whitelist = ['http://localhost:5173/', 'https://sparvi-site.vercel.app']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }


// // middleware
// app.use(cors(corsOptions));
app.use(express.urlencoded({extended:false}))
app.use(express.json());

// options
// app.options('/api/user/register', cors())

// routes
app.get('/', (req, res) => {
  res.send('Server is up and running')
})
app.use('/api/user', userRoute);

// port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});