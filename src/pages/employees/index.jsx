import { Link } from 'react-router-dom';
import { Table } from '../../components';
import circleLeftSolid from '../../assets/circle-left-solid.svg';
import dataArrayJson from '../../datas/employees.json';

function EmployeesDataList() {
    return (
        <div className="employees-ctn">
            <h1 className="employees-title">Current Employees</h1>
            <div className="employees-table-ctn">
                <div className="employees-table-options">
                    <span>Show entries</span>
                    <span>Search bar</span>
                </div>
                <Table dataArray={dataArrayJson} />
                <div className="employees-table-options">
                    <span>Showing 1 to 20 of 20 entries</span>
                    <span>Pagination 1 2 .. 5</span>
                </div>
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
