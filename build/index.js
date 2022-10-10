"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next();
}, (req, res, next) => {
    console.log('Request Type:', req.method);
    next();
});
/**
 * Routes
 */
app.use('/app', routers_1.default);
app.use((err, req, res, next) => {
    console.log("uiyhfgcvvbn jkhjgcvghukhb hgfgy");
    console.error(err);
    res.status(500).send({ msg: 'Something broke!' });
});
app.listen(process.env.PORT, () => {
    console.info(` listening at 8080`);
});
