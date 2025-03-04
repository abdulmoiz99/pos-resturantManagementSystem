const express = require("express");
const { addDish, getDishes } = require("../controllers/dishController");
const router = express.Router();
const {isVerifiedUser} = require("../middleware/tokenVerification")



router.route("/").post(isVerifiedUser, addDish);
// router.route("/:id").get(isVerifiedUser, getDishes);
router.route("/category/:categoryId").get(isVerifiedUser, getDishes);


module.exports = router;