const { default: mongoose } = require("mongoose");
const Blog = require("../models/blogModel")

const createBlog =async (req,res)=>{
    const {title,author,body} = req.body;
    const emptyfiels= []
    if(!title)
    {
        emptyfiels.push("title");
    }
    if(!author)
    {
        emptyfiels.push("author");
    }
    if(!body)
    {
        emptyfiels.push("body");
    }
    if(emptyfiels.length>0)
    {
        return res.status(400).json({message:"Please fill all the fields",fields:emptyfiels})
    }

    try {
        const blog = new Blog({title,author,body});
        blog.save();
        res.status(200).json(blog)
        
    } catch (error) {
        res.status(404).json({message:error.message});
        
    }


}
module.exports={createBlog}