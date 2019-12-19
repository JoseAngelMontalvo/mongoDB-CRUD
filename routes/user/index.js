const Express = require("express");
const router = Express.Router();

router.use("/new", require("./new.js"))
router.use("/update", require("./update"))
router.use("/delete", require("./delete.js"))
router.use("/getByName", require("./getByName.js"))




module.exports = router