import axios from "../axios/config"

export const CourseService = {
    getAllCourses: function() {
        return axios.get("/api/allCourses")
    },
    getEnrolledCourses: function() {
        return axios.get("/api/student/courses")
    },
    enrollCourses: function(courseName){
        return axios.post(`/api/student/course/${courseName}`)
    },
    dropCourses: function(courseName){
        return axios.delete(`/api/student/course/${courseName}`)
    }
}