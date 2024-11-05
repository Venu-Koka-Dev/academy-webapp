const { courses } = require("@/data/courses")

export const getCourseData = (slug) => {
    const selectedCourses = courses.filter(course => {
        if (course.slug === slug) {
          return true;
        }
        else 
          return false;  
    })

    return selectedCourses[0];
}