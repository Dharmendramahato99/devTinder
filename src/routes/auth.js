const express = require("express");
const { validateSignUpData } = require("../utils/validation");
const authRouter = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

authRouter.post("/signup", async (req, res) => {
    try{  
    // Validation of data
      validateSignUpData(req);

      const {firstName,lastName,emailId,password} = req.body;
      // Encrypt the password
      
      const passwordHash = await bcrypt.hash(password,10);
      //console.log(passwordHash);

     //console.log(req.body);
     const user = new User({
        firstName,
        lastName,
        emailId,
        password: passwordHash,
     });
        
            await user.save();
            res.send("User Added successfully!");
        } catch (err) {
            res.status(400).send("ERROR: " + err.message);
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

authRouter.post("/login", async(req,res) => {
    try{
        
       const {emailId,password} = req.body;
        
       const user = await User.findOne({emailId: emailId});
       if(!user){
         throw new Error("Invalid credentials");
       }
       const isPasswordValid = await user.validatePassword(password);

       if(isPasswordValid){
       
        // Create a JWT Token

        const token = await user.getJWT();
       // console.log(token);


        res.cookie("token",token,{
            expires: new Date(Date.now() + 8 * 3600000),
        });
        res.send("Login Successful!!!");
       }
       else{
        throw new Error("Invalid credentials");
       }

    }catch(err){
       res.status(400).send("ERROR : " + err.message);
    }
})



module.exports = authRouter;