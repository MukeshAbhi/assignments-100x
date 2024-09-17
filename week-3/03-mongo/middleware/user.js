const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const {username,password } = req.headers;
    const data = await User.findOne({username:username,password:password});
    if(!data){
        return res.status(403).json({
            msg: "User doesnt exist"
        })
    }else return next();
}

module.exports = userMiddleware;