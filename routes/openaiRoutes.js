const Router = require("express");
const router = Router();

const controller = require("../controller/openaiController");

router.post("/image", controller.generateImage);

module.exports = router;
