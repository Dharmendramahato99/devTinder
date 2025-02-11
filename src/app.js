const express = require('express');
const connectDB = require("./config/database");
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require('./routes/user');

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/",userRouter);

connectDB().then(() => {
    console.log("Database connection established...");
    app.listen(7777,() => {
        console.log("Server is successfully listening on port 7777...");
    });
}).catch((err) => {
    console.error("Database cannot be connected");
});





// Feed API - GET /feed - get all the users from the database
// app.get("/feed", async(req,res) => {
//         try{
//             const users = await User.find({});
//             res.send(users);
//         }
//         catch(err){
//             res.status(400).send("Something went wrong");
//         }
//     });
  

// //Get user by email
// app.get("/user", async(req,res) => {
//     const userEmail = req.body.emailId;

//     try{
//         const users = await User.find({emailId:userEmail});
//         if(users.length === 0){
//             res.status(404).send("User not found");
//         }else{
//             res.send(users);
//         }
//     }
//     catch(err){
//         res.status(400).send("Something went wrong");
//     }
// });

// // Delete a user from the database
// app.delete("/user", async(req,res) => {
//     const userId = req.body.userId;
//     try{
//         const user = await User.findByIdAndDelete({_id:userId});
//         res.send("User deleted successfully");
//     } catch(err){
//         res.status(400).send("Something went wrong");
//     }
// });

// // Update data of the user
// app.patch("/user/:userId",async(req,res) => {
//     const userId = req.params?.userId;
//     const data = req.body;

//     try{
//         const ALLOWED_UPDATES = ["photoUrl","about","gender","age","skills"];

//         const isUpdateAllowed = Object.keys(data).every((k) =>
//             ALLOWED_UPDATES.includes(k)
//         );
//         if(!isUpdateAllowed){
//            throw new Error("Update not allowed");
//         }
//          if(data?.skills.length >10){
//             throw new Error ("Skills cannot be more than 10");
//          }

//         const user = await User.findByIdAndUpdate({_id: userId},data,{
//         runValidators: true,
//         });
//         res.send("User updated successfully");
//     }
//     catch(err){
//         res.status(400).send("UPDATE FAiLED:" + err.message);
//     }
// });




























// app.get("/getUserData",(req,res) => {
//     // Logic of DB call and get user data

//     throw new Error("dvbzhjf");
//     res.send("User Data Sent");
// });

// app.use("/",(err,req,res,next) => {
//     if(err){
//         // Log Your error
//         res.status(500).send("something went wrong");
//     }
// });


// const { adminAuth,userAuth } = require("./middlewares/auth");


// // Handle Auth Middleware for all GET POST,... requests
// app.use("/admin",adminAuth);

// app.get("/user",userAuth, (req,res) => {
//     res.send("User Data Sent");
// });

// app.get("/admin/getAllData",(req,res) => {
//     res.send("All Data Sent");
// });

// app.get("/admin/deleteUser",(req,res) => {
//     res.send("Deleted a user");
// });

































// app.use(
//     "/user",
//     (req,res,next) => {
//       console.log("Handling the route user!!");
//       res.send("Response!!");
//       next();
//     },
//     (req,res) => {
//         console.log("Handling the route user 2!!");
//        // res.send("2nd Response!!");
//     }
// );





















// app.get("/user",(req,res) => {
//     console.log(req.query);
//     console.log(req.params);
//     res.send({
//         firstName: "Dharmendra",
//         lastName: "Mahato"
//     })
// })

// app.use("/test",(req,res) => {
//     res.send("Hello from the test!");
// });



