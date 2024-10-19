import express, { Request, Response } from  'express';
import 'dotenv/config';
import cors from 'cors';
import authRoute from './routes/auth.route.js';
import mongoose from 'mongoose';

const port = 3000

const app = express()

const corsConfig = {
    origin: '*',
    credential: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.options('', cors(corsConfig))
app.use(cors(corsConfig));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

mongoose.connect(process.env.MONGODB_CONNECT)
  .then(() => (
    console.log('db connected!')
  ));

const URL = '/api';
app.use(URL + '/user', authRoute);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})