
const CategoryModel = require("../models/categoryModel");
const slugify =require('slugify');
const asyncHandler = require('express-async-handler');





exports.getCategories = asyncHandler(async (req, res) => {
    const categories = await CategoryModel.find({});
    res.status(200).json({ results: categories.length, data: categories });
});





exports.createcategory=async (req,res)=>{

  const name = req.body.name;
try{
  const category=await
  CategoryModel.create({name , slug :slugify(name)});
  res.status(201).json({data:category});
}  catch(err){
  res.status(400).send(err);
}
  
  
  
  // const newCategory = new CategoryModel({name});
  // newCategory
  // .save()
  // .then((doc)=> {
  
  //   res.json(doc);
  
  // })
  // .catch((err)=>{
  //   res.json(err);
  // });



  };


