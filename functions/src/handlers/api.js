const Koa = require("koa");
const routes = require("../routes/routes.js");
const cors = require("koa2-cors");

const app = new Koa();

app.use(cors());
app.use(routes.routes());
app.use(routes.allowedMethods());

module.exports = app;
