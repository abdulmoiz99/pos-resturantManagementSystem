require("dotenv").config();
const express = require("express");
const connectDB =require("./config/database");

const config = require("./config/config");
const globalErrorHandle = require("./middleware/globalErrorHandler");
const createHttpError = require("http-errors");
const cookieParser = require("cookie-parser");
const cors = require("cors")

const app = express();

const PORT = config.port;

connectDB();
// app.get('/favicon.ico', (req, res) => res.status(204).end());


//Middlewares
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173']   
}))
app.use(express.json()); //parse incoming request in json format
app.use(cookieParser())

app.use((req, res, next) => {
    if (req.path === "/favicon.ico" || req.path === "/favicon") {
        return res.status(204).end(); // No Content response
    }
    next();
});

// root Endpoint
app.get("/", (req, res) => {

    res.json({message : "HEllo from POS Server"})
    // const err = createHttpError(404,"something went wrong!");
    // throw err;

})


// Other Endpoints
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/order", require("./routes/orderRoute"));
app.use("/api/table", require("./routes/tableRoutes"));
app.use("/api/category", require("./routes/categoryRoute"));
app.use("/api/dish", require("./routes/dishRoute"));



//global error handler
app.use(globalErrorHandle);

app.listen(PORT,()=>{

    console.log(`POS Server listening on port ${PORT}`);
})