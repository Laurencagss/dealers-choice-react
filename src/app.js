import React from "react";
import axios from "axios";


class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            teachers: [],
            students: [],
            classes: [],
            teacher: [],
            student: [],
            class: [],
        };
    }

    
    getClasses = async () => {
        try {
            const {data} = await axios.get('/api/classes')
            this.setState({classes: data})
        } catch (error) {
            console.log(error)
        }
    }

    getTeachers = async () => {
        try {
            const {data} = await axios.get('/api/teachers')
            this.setState({teachers: data})
        } catch (error) {
            console.log(error)
        }
    }

    getStudents = async () => {
        try {
            const {data} = await axios.get('/api/students')
            this.setState({students: data})
        } catch (error) {
            console.log(error)
        }
    }


 async componentDidMount() {
        const myClasses = await axios.get('/api/classes')
        this.setState({classes: myClasses.data})

        const myTeachers = await axios.get('/api/teachers')
        this.setState({teachers: myTeachers.data})

        const myStudents = await axios.get('/api/students')
        this.setState({students: myStudents.data})
 }

    render() {
        return (
            <div>
                <h1>Classes</h1>
                <Classes classes={this.state.classes} />
                <h1>Teachers</h1>
                <Teachers teachers={this.state.teachers} />
                <h1>Students</h1>
                <Students students={this.state.students} />
            </div>
        )
    }   
}
