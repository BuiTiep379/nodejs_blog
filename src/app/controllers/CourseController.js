const Course = require('../models/Course')
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
class CourseController {
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => 
                res.render('courses/show', {
                    course : mongooseToObject(course) 
                }
               ))
            .catch(next)
        
    }
    create(req, res, next) {
          res.render('courses/create')  
    }

    store(req, res, next){
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
    }
}

module.exports = new CourseController();