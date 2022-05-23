function Table({ dataArray }) {
    return (
        <div>
            <table>
                <thead>
                    <tr className="table-line-title">
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Start Date</th>
                        <th>Department</th>
                        <th>Date of Birth</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {dataArray.map((employee, index) => (
                        <tr key={index} className="table-line-employee">
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.startday}</td>
                            <td>{employee.department}</td>
                            <td>{employee.birthday}</td>
                            <td>{employee.street}</td>
                            <td>{employee.city}</td>
                            <td>{employee.state}</td>
                            <td>{employee.zipcode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
