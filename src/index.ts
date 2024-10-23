import express, { Request, Response } from  'express';
import 'dotenv/config';
import cors from 'cors';
import authRoute from './routes/auth.route.js';
import mongoose from 'mongoose';

const port = 8000

const app = express()

const corsConfig = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.options('', cors(corsConfig))
app.use(cors(corsConfig));

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