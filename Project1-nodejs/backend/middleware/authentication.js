const express = require("express");
const router = express.Router();
// Request từ FE đi qua middleware, rồi tới xử lý ở controller thông qua hàm authentication 
const controllerAuthentication = require("../controllers/authentication");
// Tiêu chí số 9: Add cơ chế xác thực API
router.use(controllerAuthentication.authentication);

module.exports = router;
