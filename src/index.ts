import express, { Request, Response } from  'express';
import 'dotenv/config';

import authRoute from './routes/auth.route.js'

const port = 3000

const app = express()
app.use(express.json());

const URL = '/api';
app.use(URL + '/user', authRoute);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})