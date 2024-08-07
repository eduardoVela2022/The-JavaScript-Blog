// Imports
const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");

// Routes
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

// Exports
module.exports = router;
