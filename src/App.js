import React, { Component } from 'react';

class UserData extends Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                <h2>User Data</h2>
                {data.map(user => (
                    <div key={user.grid}>
                        <h3>Name: {user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>City: {user.city}</p>
                        <p>Courses: {user.course.join(', ')}</p>
                    </div>
                ))}
            </div>
        );
    }
}

class EmployeeData extends Component {
    render() {
        const { employees } = this.props;
        return (
            <div>
                <h2>Employee Data</h2>
                {employees.map(employee => (
                    <div key={employee.empid}>
                        <h3>Name: {employee.empname}</h3>
                        <p>Email: {employee.empemail}</p>
                        <p>Department: {employee.empdepartment}</p>
                        <p>Salary: {employee.empsalary}</p>
                    </div>
                ))}
            </div>
        );
    }
}

class App extends Component {
    render() {

        const data = [
            {
                grid: 1,
                name: 'kishan',
                email: 'kishan@gmail.com',
                password: 'kishan@123',
                course: ["html", "css", "bootstrap", "js"],
                city: "surat"
            },
       
        ];

        const employee = [
            {
                empid: 1,
                empname: "abc",
                empemail: "abc@gmail.com",
                empphone: 12345,
                empaddress: {
                    country: "india",
                    state: "gujarat",
                    city: "surat",
                    area: "motavarachha"
                },
                empdeg: "junior",
                empsalary: 23000,
                empdepartment: "ui/ux"
            },
        
        ];

        return (
            <div>
                <UserData data={data} />
                <EmployeeData employees={employee} />
            </div>
        );
    }
}

export default App;
