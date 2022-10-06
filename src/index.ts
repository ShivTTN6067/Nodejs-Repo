import express from 'express';

import bodyParser from "body-parser";

import dotenv from 'dotenv';

dotenv.config();

import Routes from './Routers';

import { Express, Request, Response, NextFunction, Errback } from 'express';

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Request URL:', req.originalUrl);
  next()
}, (req: Request, res: Response, next: NextFunction) => {
  console.log('Request Type:', req.method)
  next()
})

/**
 * Routes
 */


app.use('/app', Routes);

app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
  console.log("uiyhfgcvvbn jkhjgcvghukhb hgfgy")
  console.error(err)
  res.status(500).send({ msg: 'Something broke!' })
})



app.listen(process.env.PORT, () => {
  console.info(` listening at 4000`)
});

export default app;