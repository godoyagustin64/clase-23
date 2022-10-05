const express = require("express");
const { renderUploadProductView } = require("../controllers/product");
const router = express.Router();


router.get("/detail-product", renderUploadProductView);


module.exports = router;