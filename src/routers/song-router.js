const Router = require("express");
const songController = require("../controllers/song-controller");

const router = new Router();

router.post("/song", songController.createSong);
router.get("/song/:id", songController.getSong);
router.get("/song", songController.getAllSong);
router.put("/song/:id", songController.editSong);
router.delete("/song/:id", songController.deleteSong);

module.exports = router;
