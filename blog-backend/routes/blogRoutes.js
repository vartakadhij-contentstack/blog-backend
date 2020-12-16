const express = require("express");
const { 
    getAllBlogs, 
    createBlog, 
    verifyPostRequest, 
    getBlogById, 
 } = require("../controllers/blogController");

const router = express.Router();

router.route("/blogs").get(getAllBlogs).post(verifyPostRequest,createBlog);
router.route("/blogs/:blogId").get(getBlogById);

module.exports = router;