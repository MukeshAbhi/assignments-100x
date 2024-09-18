const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db");
const {JWT_SECRET} = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password} = req.body;
    await User.create({
        username,
        password
    })

    res.json({
        message: 'User created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password} = req.body;
    const user = await User.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({username: username}, JWT_SECRET);
        res.json({
            token: token
        })
    } else {
        res.json({
            msg: 'Username not found'
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        courses : response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;// Retrieved from user middleware 
    
    await User.updateOne({
        username: username
    },{
        "$push" : {
            purchasedCourse : courseId
        }
    })
    res.json({
        message: 'Course purchased successfully'
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;// Retrieved from user middleware

    const user = await User.findOne({
        username: username
    })
    const courses = await Course.find({
        _id: { "$in": user.purchasedCourse }
    });

    res.json({
        courses: courses
    });
});

module.exports = router