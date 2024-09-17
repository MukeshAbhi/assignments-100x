const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();;

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
    const newCourse = Course.create({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink,
        
    });
    const courseId =  (await newCourse)._id.toString();
    console.log(courseId);
    res.json({
        msg: 'Course created successfuly ', courseId: courseId,
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