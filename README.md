# blog-backend

This is a repository for the blog-backend using filesystem.

It contains the API endpoints for the following operations.
1. Get all blogs
2. Get a blog by it's blogId
3. Create a blog

# Run the application

You can run the code on your local machine using the following command in the terminal.

``` npm run dev ```

Make sure that you have Nodemon installed on your machine. If not, you can simply run the following command:

``` node app.js ```

# API Endpoints

# 1. Get all blogs

For this, simply use the ```/blogdata/blogs``` endpoint wth a GET request.

# 2. Get a blog by it's blogId

For this, use the ```/blogdata/:blogId``` endpoint with a GET request. Make sure that you pass the value of blogId in the Params.

# 3. Create a blog

For this, use the ```/blogdata/blogs``` endpoint with a POST request. Pass the data in the request Body as a JSON object.
The Body shoud contain the following Properties for a valid request:
1. blogAuthor
2. blogTitle
3. blogContent

Use the Postman application to make all the above requests.
