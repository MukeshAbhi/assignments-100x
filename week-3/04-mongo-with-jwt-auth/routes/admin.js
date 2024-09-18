const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const {JWT_SECRET} = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    await Admin.create({
        username,
        password
    });
    res.json({
        msg: 'Admin created successfuly'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    
    const user = await User.find({
        username,
        password
    })
    if (user){
        const token = jwt.sign({username: username}, JWT_SECRET);
        res.json({
            token : token 
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title, description, price, imageLink} = req.body;
    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    });
    const courseId = newCourse._id.toString();
    res.json({
        message: 'Course created successfully', courseId: courseId 
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json({
        courses : courses,
    })
});

module.exports = router;