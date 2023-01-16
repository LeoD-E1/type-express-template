import { createServer } from './config/express';
import http from 'http';
import 'dotenv/config';

const startServer = () => {
	const port = process.env.PORT || 4000;
	const app = createServer();
	http.createServer(app).listen(port, () => {
		console.log('server listening on port ' + port);
	});
};

startServer();
