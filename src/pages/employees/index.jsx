import { Link } from 'react-router-dom';
import { Table } from '../../components';
import circleLeftSolid from '../../assets/circle-left-solid.svg';
import dataArrayJson from '../../datas/employees.json';

function EmployeesDataList() {
    const dataArray = [
        {
            birthday: '1975-05-03',
            city: 'Chicago',
            department: 'Engineering',
            firstname: 'Jake',
            lastname: 'Malone',
            startday: '2004-03-01',
            state: 'Illinois',
            street: '998 Talcott Avenue',
            zipcode: '60602',
        },
        {
            birthday: '1985-07-16',
            city: 'New York',
            department: 'Marketing',
            firstname: 'Claudia',
            lastname: 'Madison',
            startday: '2010-01-01',
            state: 'New York',
            street: '456 Governor Street',
            zipcode: '10013',
        },
    ];
    return (
        <div className="employees-ctn">
            <h1 className="employees-title">Current Employees</h1>
            <div className="employees-table-ctn">
                <Table dataArray={dataArrayJson} />
            </div>
            <Link to="/" className="home-link">
                <span className="home-link-msg">Home</span>
                <img
                    src={circleLeftSolid}
                    alt="circle left arrow"
                    className="home-link-icon"
                />
            </Link>
        </div>
    );
}

export default EmployeesDataList;
