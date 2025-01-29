const express = require('express');
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
app.use(express.json());

app.post("/signup", async (req, res) => {
     //console.log(req.body);
     const user = new User(req.body);
        try{
            await user.save();
            res.send("User Added successfully!");
        } catch (err) {
            res.status(400).send("Error saving the user:" + err.message);
        }
    

    // Creating a new instance of the User model

    // const user = new User({
    //     firstName: "Dharmendra",
    //     lastName: "Mahato",
    //     emailId: "mahatodharmendra726@gmail.com",
    //     password: "Dhar@123",
    // });

    // try{
    //     await user.save();
    //     res.send("User Added successfully!");
    // } catch (err) {
    //     res.status(400).send("Error saving the user:" + err.message);
    // }

   
});


// Feed API - GET /feed - get all the users from the database
app.get("/feed", async(req,res) => {
        try{
            const users = await User.find({});
            res.send(users);
        }
        catch(err){
            res.status(400).send("Something went wrong");
        }
    });
  

//Get user by email
app.get("/user", async(req,res) => {
    const userEmail = req.body.emailId;

    try{
        const users = await User.find({emailId:userEmail});
        if(users.length === 0){
            res.status(404).send("User not found");
        }else{
            res.send(users);
        }
    }
    catch(err){
        res.status(400).send("Something went wrong");
    }
});

// Delete a user from the database
app.delete("/user", async(req,res) => {
    const userId = req.body.userId;
    try{
        const user = await User.findByIdAndDelete({_id:userId});
        res.send("User deleted successfully");
    } catch(err){
        res.status(400).send("Something went wrong");
    }
});

// Update data of the user
app.patch("/user/:userId",async(req,res) => {
    const userId = req.params?.userId;
    const data = req.body;

    try{
        const ALLOWED_UPDATES = ["photoUrl","about","gender","age","skills"];

        const isUpdateAllowed = Object.keys(data).every((k) =>
            ALLOWED_UPDATES.includes(k)
        );
        if(!isUpdateAllowed){
           throw new Error("Update not allowed");
        }
         if(data?.skills.length >10){
            throw new Error ("Skills cannot be more than 10");
         }

        const user = await User.findByIdAndUpdate({_id: userId},data,{
        runValidators: true,
        });
        res.send("User updated successfully");
    }
    catch(err){
        res.status(400).send("UPDATE FAiLED:" + err.message);
    }
});

connectDB().then(() => {
    console.log("Database connection established...");
    app.listen(7777,() => {
        console.log("Server is successfully listening on port 7777...");
    });
}).catch((err) => {
    console.error("Database cannot be connected");
});


























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



