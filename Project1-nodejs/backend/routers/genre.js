// Invoking packages
const express = require("express");
const router = express.Router();


// // Fetch funcs from controller for the execution
const controllerTrending = require("../controllers/trending");
const controllerTopRate = require("../controllers/topRate");
const controllerDiscover = require("../controllers/discover");
const controllerVideo = require("../controllers/video");
const controllerSeach = require("../controllers/search");
// Also backend able to return data from FE
router.get("/api/movies/trending", controllerTrending.trending);
router.get("/api/movies/top-rate", controllerTopRate.topRate);
router.get("/api/movies/discover", controllerDiscover.discover);
router.get("/api/movies/video", controllerVideo.video);
router.post("/api/movies/search", controllerSeach.search);

module.exports = router;
