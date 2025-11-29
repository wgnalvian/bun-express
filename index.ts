// index.ts

import express, { Request, Response, NextFunction } from 'express';


const app = express();
const PORT = Number(process.env.PORT) || 3000;


app.use(express.json());


app.get('/health', (req: Request, res: Response) => {
res.json({ status: 'ok', uptime: process.uptime() });
});


app.use((req: Request, res: Response) => {
res.status(404).json({ message: 'Not found' });
});


app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});