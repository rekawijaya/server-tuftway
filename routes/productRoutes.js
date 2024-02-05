const routes = require("express").Router();
global.query = require("../models/query");
global.response = require("../response/response");
require("dotenv").config({path: "../.env"});
const product = require("../controllers/productController");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    });
    
    const storage = new CloudinaryStorage({
        cloudinary,
        params: {
        folder: "PRODUCT_IMAGE",
        allowedFormats: ["jpeg", "png", "jpg"],
        },
    });
    const upload = multer({ storage: storage });

routes.post("/add", upload.single("file"), product.addProduct)
routes.get("/get", product.readAllProduct)
routes.delete("/delete", product.deleteProduct)


module.exports = routes