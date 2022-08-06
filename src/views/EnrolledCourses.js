import React from "react"
import CourseTable from "../components/CourseTable"
import { CourseService } from "../service/CourseService"
class EnrolledCourses extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        CourseService.getEnrolledCourses().then(response => {
            this.setState({
                courses:response.data
            })
        }).catch(error => {
            console.log(error)
        })
            
    }

    dropCourse(courseName) {
        CourseService.dropCourses(courseName)
            .then(response => {
                alert(`Congrat! ${courseName} drop successfully`)
                window.location.reload()
            }).catch(error => {
                alert(`Sorry, ${courseName} drop failed due to ${error}`)
            })
    }

    render() {
        return (
            <div>
                <CourseTable courses={this.state.courses}
                            buttonText = {"Drop"}
                            buttonColor = {"error"}
                            handleButtonOnClick = {(this.dropCourse)}/>
            </div>
        )
    }
}

export default EnrolledCourses