// const createHttpError = require("http-errors");
// const Dishes = require("../models/dishesModel");
// const mongoose = require("mongoose");

// const addDish = async (req, res, next) => {
//     try {
//         const { dishName, dishPrice, category } = req.body;
        
//         console.log("Request Body:", req.body);

//         if (!dishName || !dishPrice || !category) {
//             const error = createHttpError(400, "Please provide Dish Name, Price, and Category!");
//             return next(error);
//         }

//         const isDishPresent = await Dishes.findOne({ dishName, category }); // Check uniqueness within category

//         if (isDishPresent) {
//             const error = createHttpError(400, "Dish already exists in this category!");
//             return next(error);
//         }

//         const newDish = new Dishes({ dishName, dishPrice, category }); // Use lowercase dishName
//         await newDish.save();

//         res.status(201).json({
//             success: true,
//             message: "Dish added!",
//             data: newDish,
//         });
//     } catch (error) {
//         return next(error);
//     }
// };

// module.exports = { addDish };


const createHttpError = require("http-errors");
const Dishes = require("../models/dishesModel");
const mongoose = require("mongoose");

const addDish = async (req, res, next) => {
    try {
        const { dishName, dishPrice, category } = req.body;

        console.log("Request Body:", req.body);

        // Input validation
        if (!dishName || !dishPrice || !category) {
            const error = createHttpError(400, "Please provide Dish Name, Price, and Category!");
            return next(error);
        }

        if (isNaN(dishPrice)) {
            const error = createHttpError(400, "Dish Price must be a valid number!");
            return next(error);
        }

        if (!mongoose.Types.ObjectId.isValid(category)) {
            const error = createHttpError(400, "Invalid Category ID!");
            return next(error);
        }

        // Uniqueness check (case-insensitive)
        const isDishPresent = await Dishes.findOne({
            dishName: { $regex: new RegExp(`^${dishName}$`, "i") },
            category,
        });

        if (isDishPresent) {
            console.log("Dish already exists in this category!");
            const error = createHttpError(400, "Dish already exists in this category!");
            return next(error);
        }

        // Create and save the new dish
        const newDish = new Dishes({ dishName, dishPrice, category });
        await newDish.save();

        res.status(201).json({
            success: true,
            message: "Dish added!",
            data: newDish,
        });
    } catch (error) {
        console.error("Error adding dish:", error);
        return next(error);
    }
};

const getDishes = async (req, res, next) => {
    try {
        const { categoryId } = req.params; // Get categoryId from the route parameters

        // Validate categoryId
        if (!mongoose.Types.ObjectId.isValid(categoryId)) {
            const error = createHttpError(400, "Invalid Category ID!");
            return next(error);
        }

        // Fetch dishes for the specified category
        const dishes = await Dishes.find({ category: categoryId }); // Use Dishes, not Dish

        res.status(200).json({
            success: true,
            data: dishes,
        });
    } catch (error) {
        console.error("Error fetching dishes:", error);
        return next(error);
    }
};


module.exports = { addDish, getDishes };