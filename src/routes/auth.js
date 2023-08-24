const express = require("express");
const router = express.Router();

const { getLogin } = require("../controller/auth");

router.get("/", getLogin);
router.post("/register",)

module.exports = router;
