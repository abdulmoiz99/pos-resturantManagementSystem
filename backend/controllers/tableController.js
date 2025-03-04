const createHttpError = require("http-errors");
const Table = require("../models/tableModel")
const mongoose = require("mongoose")




const addTable = async (req, res, next) => {

    try {
        
        const { tableNo, seats } = req.body;

        if(!tableNo){
            return next(createHttpError(400, "Please provide table No!"));
        }

        const isTablePresent = await Table.findOne({tableNo});

        if(isTablePresent){
            return next(createHttpError(400, "Table already exists!"));
        }

        const newTable = new Table({tableNo, seats});
        await newTable.save();

        res.status(201).json({success: true, message: "Table added!",
             data: newTable });

    } catch (error) {
        next(error)
        
    }

}

const getTable = async (req,res,next) => {

    try {
        
        const tables = await Table.find().populate({
            path: "currentOrder",
            select: "customerDetails"
        });
        res.status(200).json({success: true, data: tables});


    } catch (error) {
        next(error)
    }

}

const updateTable = async (req, res, next) => {
   
    try {

        const { status, orderId } = req.body;

 const {id} = req.params


        if(!mongoose.Types.ObjectId.isValid(id)){
            const error = createHttpError(404, "Invalid id!");
            return next(error);
        }

        const table = await Table.findByIdAndUpdate(
            id,
            {status, currentOrder: orderId},
            {new: true}
        );

        if(!table){
            return next(createHttpError(404, "Table not found!"));
        }

        res.status(200).json({success: true, message: "table updated!",data: table});

    } catch (error) {
        next(error)
        
    }
    
}

module.exports = {addTable,getTable,updateTable};