import React from "react"
import CourseTable from "../components/CourseTable"
import { CourseService } from "../service/CourseService"

class AllCourses extends React.Component {
    state = {
        courses: []
    }
    componentDidMount() {
        CourseService.getAllCourses().then(response => {
            this.setState({
                courses:response.data
            })
        }).catch(error => {
            console.log(error)
        })
            
    }

    enrollCourse(courseName) {
        CourseService.enrollCourses(courseName)
            .then(response => {
                alert(`Congrat! ${courseName} enrollment successfully`)
            }).catch(error => {
                alert(`Sorry, ${courseName} enrollment failed due to ${error}`)
            })
    }

    render() {
        return (
            <div>
                <CourseTable courses={this.state.courses}
                            buttonText = {"Enroll"}
                            buttonColor = {"success"}
                            handleButtonOnClick = {(this.enrollCourse)}/>
            </div>
        )
    }
}

export default AllCourses