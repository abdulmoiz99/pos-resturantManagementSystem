const express = require("express");
const { addTable, getTable, updateTable } = require("../controllers/tableController");
const router = express.Router();
const {isVerifiedUser} = require("../middleware/tokenVerification")



router.route("/").post(isVerifiedUser, addTable);
router.route("/").get(isVerifiedUser, getTable);
router.route("/:id").put(isVerifiedUser, updateTable);

module.exports = router;