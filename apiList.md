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


- Pagination

/feed?page=1&limit=10 => 1-10 => .skip(0) & .limit(10)

/feed?page=2&limit=10 => 11-20 => .skip(10) & .limit(10)

/feed?page=3&limit=10 => 21-30 => .skip(20) & .limit(10)

skip = (page-1)*limit;