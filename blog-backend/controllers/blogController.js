const fs = require("fs");
const path = require("path");
const Blog = require("../models/Blog");
const uniqid = require("uniqid");
const sendErrorMessage = require("../helpers/sendError");
const AppError = require("../helpers/appErrorClass");
const sendResponse = require("../helpers/sendResponse");
const fileName = path.join(__dirname,"..","data","blogs.json");
const blogs = JSON.parse(fs.readFileSync(fileName,"utf-8"));

const verifyPostRequest = (req,res,next)=>{
    const requiredProperties = ["blogAuthor","blogTitle","blogContent"];
    let result = requiredProperties.every((key)=>{
        return req.body[key];
    })

    if(!result){
        sendErrorMessage(new AppError(400,"Unsuccessful","Request Body is not valid"),
        req,
        res
        )
    }
    else{
        next();
    }
}

const getAllBlogs = (req,res,next) => {
    // res.status(200).json({
    //     status:"Successful",
    //     data: tasks
    // })
    sendResponse(200,"Successful",[blogs],req,res);

}

const createBlog = (req,res,next) => {
    console.log(req.body);
    let newBlog = new Blog(req.body.blogAuthor,req.body.blogTitle,req.body.blogContent);
    blogs.push(newBlog);
    fs.writeFile(fileName,JSON.stringify(blogs,null,2), (err)=>{
        if(err){
            sendErrorMessage(
                new AppError(500,"Internal Error","Error in completing request"),
                req,
                res
                );
        return err;
        }
        sendResponse(201,"Successful",[newBlog],req,res);
    });
}

const getBlogById = (req,res,next)=>{
    let result = blogs.filter((blog)=>{
        return blog.blogId == req.params.blogId;
    });
    if(!result){
        sendErrorMessage(new AppError(400,"Unsuccessful","Task not found"),req,res);
    }
    sendResponse(200,"Successful",result,req,res);
}

module.exports.getAllBlogs = getAllBlogs;
module.exports.createBlog = createBlog;
module.exports.verifyPostRequest = verifyPostRequest;
module.exports.getBlogById = getBlogById;