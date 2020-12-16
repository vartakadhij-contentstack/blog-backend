const uniqid = require("uniqid");

class Blog{
    constructor(blogAuthor,blogTitle,blogContent){
        this.blogId = uniqid();
        this.blogAuthor = blogAuthor;
        this.blogTitle = blogTitle;
        this.blogContent = blogContent;
    }
}

module.exports = Blog;