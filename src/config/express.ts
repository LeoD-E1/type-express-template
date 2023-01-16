// import locationRouter from '@controller/location/location.router';
import errorHandler from '../middleware/errorHandler';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export const createServer = (): express.Application => {
	const app = express();

	app.use(express.urlencoded({ extended: true }));
	app.use(cors());
	app.use(express.json());
	app.use(morgan('dev'));

	app.disable('x-powered-by');

	app.get('/health', (_req, res) => {
		res.send('UP');
	});

	// Add the route manager here

	app.use(errorHandler);

	return app;
};
