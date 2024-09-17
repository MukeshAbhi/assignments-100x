const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const {username,password } = req.headers;
    const data = await Admin.findOne({username:username,password:password});
    if(!data) {
        return res.status(403).json({
            msg: "Admin doesnt exist"
        })
    }else return next();
    
    
}

module.exports = adminMiddleware;