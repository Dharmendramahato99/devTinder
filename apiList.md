# DevTinder APIs

## authRouter
- POST /signup
- POST /login
- POST /logout

## profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password // Forgot password API

## connectionRequestRouter
- POST /request/send/:status/:userId
- POST /request/review/:status/:requestId



## userRouter
- GET /user/connections
- GET /user/requests
- GET user/feed - Gets you the profiles of other users on platform



# Compound Indexes

User.find({ firstName: "Dharmendra",lastName: "Mahato"});

userSchema.index({ firstName: 1, lastName: 1})