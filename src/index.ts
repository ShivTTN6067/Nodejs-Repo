import express from 'express';
import dotenv from 'dotenv';
import Routes from './routers';
import mongoose from 'mongoose';
import { Request, Response, NextFunction, Errback } from 'express';

dotenv.config();

const app = express();

app.use(express.json());
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/usersdb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
	console.log('Connected successfully');
});


app.use((req: Request, res: Response, next: NextFunction) => {
	console.log('Request URL:', req.originalUrl);
	next();
}, (req: Request, res: Response, next: NextFunction) => {
	console.log('Request Type:', req.method);
	next();
});

app.use('/app', Routes);

app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
	console.error(err);
	res.status(500).send({ msg: 'Something broke!' });
});

app.listen(process.env.PORT, () => {
	console.info(' listening at 8080');
});
