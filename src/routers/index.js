const Router = require("express");

const router = new Router();
const songRouter = require("./song-router");
const songwritterRouter = require("./songwriter-router");

router.use("/", songRouter);
router.use("/", songwritterRouter);

module.exports = router;
