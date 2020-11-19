import React from "react";

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
        const course ={...this.state.course, title: event.target.value};
        this.setState({course: course});
    }

    handleSubmit =() =>{
        alert(this.state.course.title);
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
            </form>
        )
    }

}

export default CoursesPage;