const jwt = require("jsonwebtoken");
const User = require("../models/user");
const userAuth = async(req,res,next) => {
   //Read the token from the req cookies  
    
  try{
    const {token} = req.cookies;

    if(!token){
        throw new Error("Token is not valid!!!!!!");
    }

    const decodeObj = await jwt.verify(token,"DEV@Tinder$790");
 
    const { _id } = decodeObj;
 
    const user = await User.findById(_id);
    if(!user){
       throw new Error("User not found");
    }
    req.user = user;
    next();
  }catch(err){
     res.status(400).send("ERROR : " + err.message);
  }


   // Validate the token
   // Find the user
   
   
};

module.exports = {
    userAuth,
}



//  const adminAuth = (req,res,next) => {
//     const token = "xyz";
//     const isAdminAuthorized = token === "xyz";
//     if(!isAdminAuthorized){
//         res.status(401).send("Unauthorized request");
//     }
//     else{
//         next();
//     }
// };

// const userAuth = (req,res,next) => {
//     const token = "xyzabs";
//     const isAdminAuthorized = token === "xyz";
//     if(!isAdminAuthorized){
//         res.status(401).send("Unauthorized request");
//     }
//     else{
//         next();
//     }
// };

// module.exports = {
//     adminAuth,
//     userAuth,
// }