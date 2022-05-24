import TableButton from '../table button';

function Table({ dataArray }) {
    return (
        <div>
            <table className="table-main">
                <thead>
                    <tr className="table-line-title">
                        <th>
                            <div className="table-line-title-div">
                                First Name <TableButton />
                            </div>
                        </th>
                        <th>
                            <div className="table-line-title-div">
                                Last Name <TableButton />
                            </div>
                        </th>
                        <th>
                            <div className="table-line-title-div">
                                Start Date <TableButton />
                            </div>
                        </th>
                        <th>
                            <div className="table-line-title-div">
                                Department <TableButton />
                            </div>
                        </th>
                        <th>
                            <div className="table-line-title-div">
                                Date of Birth <TableButton />
                            </div>
                        </th>
                        <th>
                            <div className="table-line-title-div">
                                Street <TableButton />
                            </div>
                        </th>
                        <th>
                            <div className="table-line-title-div">
                                City <TableButton />
                            </div>
                        </th>
                        <th>
                            <div className="table-line-title-div">
                                State <TableButton />
                            </div>
                        </th>
                        <th>
                            <div className="table-line-title-div">
                                Zip Code <TableButton />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dataArray.map((employee, index) => (
                        <tr
                            key={index}
                            className={`table-line-employee ${
                                index % 2 === 0
                                    ? 'table-line-white'
                                    : 'table-line-grey'
                            }`}
                        >
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
