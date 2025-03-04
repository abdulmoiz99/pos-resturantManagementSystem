const createHttpError = require("http-errors");
require('dotenv').config();
const User = require('../models/userModel');
const  config  = require("dotenv");
const { accessTokenSecret } = require("../config/config");
const jwt = require("jsonwebtoken");




const isVerifiedUser = async (req, res, next)=>{

    try {
        
        const {accessToken} = req.cookies;

        if(!accessToken){
            const error = createHttpError(401, "Please provide token!");
            return next(error);
        }
        // console.log("Access Token:", accessToken);
        // console.log("Access Token Secret:", accessTokenSecret);
        // console.log("process.env.JWT_SECRET", process.env.JWT_SECRET);
        

        const decodeToken = jwt.verify(accessToken, accessTokenSecret);

        // console.log("decode tokenn" +decodeToken)

        const user= await User.findById(decodeToken._id);
        if(!user){
            const error = createHttpError(401, "User not exist!");
            return next(error)

        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        const err = createHttpError(401,"Invalid Token!");
        next(err);
    }
}

module.exports = { isVerifiedUser };


