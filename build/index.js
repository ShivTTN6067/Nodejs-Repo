"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next();
}, (req, res, next) => {
    console.log('Request Type:', req.method);
    next();
});
// app.get('/v1/service-recruitment/availability/abc',(req, res,next)=>{
//   next(new Error("fc"));
// })
/**
 * Routes
 */
//app.use('/', require('./routes/index'));
// 404 routes redirect to buzz is logged in else to login
// app.use('*', (req, res) => {
//   res.redirect(`/api-docs`);
// });
app.use((err, req, res, next) => {
    console.log("uiyhfgcvvbn jkhjgcvghukhb hgfgy");
    console.error(err);
    //next(err)
    res.send({ msg: 'Something broke!' });
});
app.listen(4000, () => {
    console.info(` listening at `);
});
