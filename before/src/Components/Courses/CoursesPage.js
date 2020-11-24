import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../Redux/Actions/courseActions";
import PropsTypes from "prop-types";


class CoursesPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            course: {
                title: ""
            }
        }
    }
    handleChange = (event) => {
        event.preventDefault();
        const course ={...this.state.course, title: event.target.value};
        this.setState({course: course});
    }

    handleSubmit = () =>{
        event.preventDefault();
        this.props.createCourse(this.state.course);
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h2> Course</h2>
                <h3>Add course</h3>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.course.title}
                 />
                 <input type="submit" value="save" />
                 {this.props.courses.map(course => <div key={course.title}>{course.title}</div>)}
            </form>
        )
    }

}

CoursesPage.propTypes ={
    createCourse: PropsTypes.func.isRequired,
    courses:  PropsTypes.array.isRequired, 
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);