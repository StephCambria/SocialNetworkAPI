const router = require("express").Router();
const thoughtRoutes = require("./courseRoutes");
const userRoutes = require("./studentRoutes");

router.use("/api/thoughts", thoughtRoutes);
router.use("/api/users", userRoutes);

module.exports = router;
