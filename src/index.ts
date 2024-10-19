import express, { Request, Response } from  'express';
import 'dotenv/config';

import authRoute from './routes/auth.route.js';
import mongoose from 'mongoose';

const port = 3000

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const URL = '/api';
app.use(URL + '/user', authRoute);


mongoose.connect(process.env.MONGODB_CONNECT)
  .then(() => (
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`)
    })
  ));