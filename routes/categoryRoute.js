

const express = require('express');
const {
    
    getCategories,
    createcategory,

} =require("../services/categoryService")
const router = express.Router();


router.route('/').get(getCategories).post(createcategory);

module.exports =router ;