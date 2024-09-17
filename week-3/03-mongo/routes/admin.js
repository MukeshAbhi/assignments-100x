const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();;

// Admin Routes
router.post('/signup', async (req, res) => {
     const {username, password} = req.body;
      await Admin.create({
        username:username,
        password:password
     });
     
     res.json({msg: "Admin created successfully"});
});

router.post('/courses', adminMiddleware, async (req, res) => {
    //creat a new course
    const {title,description,price,imageLink} = req.body;
    Course.create({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink,
        
    });

    res.json({
        msg: 'Course created successfuly ', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json({
        courses: courses
    });
});

module.exports = router;