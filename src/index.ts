import { createServer } from './config/express';
import http from 'http';
import 'dotenv/config';

const startServer = () => {
	const app = createServer();
	http.createServer(app).listen(process.env.PORT, () => {
		console.log('server listening on port ' + process.env.PORT);
	});
};

startServer();
