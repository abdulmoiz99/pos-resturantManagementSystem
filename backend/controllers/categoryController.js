const createHttpError = require("http-errors");
const Category = require("../models/categoryModel")

const mongoose = require("mongoose");


const addCategory = async (req, res, next) => {

    try {
        const {categoryName} = req.body;

        if(!categoryName){
            const error = createHttpError(400, 'Please provide Category Name!');
            return next(error);
        }

        const isCategoryPresent = await Category.findOne({ categoryName });

        if(isCategoryPresent){
            const error = createHttpError(400, "Category already exist!");
            return next(error);
        }

        const newCategory = new Category({ categoryName });
        await newCategory.save();
     
        res.status(201).json({success: true, message: "Category  added!",
            data: newCategory });

    } catch (error) {
        return next(error);
        
    }
}

const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find();

        res.status(200).json({
            success: true,
            data: categories,
        });
    } catch (error) {
        return next(error);
    }
};

module.exports={addCategory, getCategories};