const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({

    destination: function(req,file,cb){

        cb(null,"uploads/videos");

    },

    filename: function(req,file,cb){

        cb(null,Date.now()+path.extname(file.originalname));

    }

});

const upload = multer({

    storage:storage

});

router.get("/",(req,res)=>{

    res.render("videos");

});

router.post("/upload",upload.single("video"),(req,res)=>{

    res.redirect("/videos");

});

module.exports = router;
