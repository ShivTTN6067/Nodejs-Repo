import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Routes from "./routers";
import { Request, Response, NextFunction, Errback } from "express";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
	console.log("Request URL:", req.originalUrl);
	next();
}, (req: Request, res: Response, next: NextFunction) => {
	console.log("Request Type:", req.method);
	next();
});

app.use("/app", Routes);

app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
	console.log("uiyhfgcvvbn jkhjgcvghukhb hgfgy");
	console.error(err);
	res.status(500).send({ msg: "Something broke!" });
});

app.listen(process.env.PORT, () => {
	console.info(" listening at 8080");
});
