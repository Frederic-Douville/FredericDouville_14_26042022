import TableButton from '../table button';
/**
 * Component that implement table of employees
 * @param {Array.<Object>} dataArray array of object that contains employees data
 * @param {Number} startNbr index of the first element to implement
 * @param {Number} endNbr index of the last element to implement
 * @returns {DOMImplementation}
 */
function Table({ dataArray, startNbr, endNbr }) {
    const titleArray = [
        { title: 'First Name', class: 'firstname' },
        { title: 'Last Name', class: 'lastname' },
        { title: 'Start Date', class: 'startday' },
        { title: 'Department', class: 'department' },
        { title: 'Date of Birth', class: 'birthday' },
        { title: 'Street', class: 'street' },
        { title: 'City', class: 'city' },
        { title: 'State', class: 'state' },
        { title: 'Zip Code', class: 'zipcode' },
    ];
    return (
        <div>
            <table className="table-main">
                <thead>
                    <tr className="table-line-title">
                        {titleArray.map((elem, index) => (
                            <th key={index}>
                                <div className="table-line-title-div">
                                    <span>{elem.title}</span>{' '}
                                    <TableButton name={elem.class} />
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataArray.map((employee, index) =>
                        index >= startNbr && index < endNbr ? (
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
                        ) : null
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
