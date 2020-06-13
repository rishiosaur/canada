import express, { Request, Response } from "express";

const app = express()

app.get('/', (req: Request, res: Response) => res.send('Hello World from app.ts!'))

app.get('/translate/{string}', (req: Request, res: Response) => {
  res.send(200);
})

export default app;
