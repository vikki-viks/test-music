const Router = require("express");
const songwriterController = require("../controllers/songwriter-controller");

const router = new Router();

router.post("/songwriter", songwriterController.createSongwriter);
router.get("/songwriter", songwriterController.getAllSongwriter);
router.get("/songwriter/:id", songwriterController.getSongwriter);
router.put("/songwriter/:id", songwriterController.editSongwriter);
router.delete("/songwriter/:id", songwriterController.deleteSongwriter);

module.exports = router;
