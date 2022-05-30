import { Link } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';
import { useEffect, useState } from 'react';
import { InputSearch, OptionsDropMenu, Table } from '../../components';
import circleLeftSolid from '../../assets/circle-left-solid.svg';
import dataArrayJson from '../../datas/employees.json';
import { getEmployeesData } from '../../features/employees';
import { selectEmployees } from '../../utils/selectors';

function EmployeesDataList() {
    const store = useStore();
    const [isData, setIsData] = useState(false);
    const url =
        'https://raw.githubusercontent.com/Frederic-Douville/FredericDouville_14_26042022/main/src/datas/employees.json';
    const employeeStatus = selectEmployees(store.getState()).status;
    const employeesDatas = useSelector(selectEmployees).response;

    useEffect(() => {
        getEmployeesData(store, url);
        if (employeeStatus === 'resolved') {
            setIsData(true);
        }
    }, [store, url, employeeStatus]);

    return (
        <div className="employees-ctn">
            <h1 className="employees-title">Current Employees</h1>
            <div className="employees-table-ctn">
                <div className="employees-table-options">
                    <span className="employees-table-options-show">
                        Show{' '}
                        <OptionsDropMenu optionsArray={[10, 25, 50, 100]} />{' '}
                        entries
                    </span>
                    <InputSearch />
                </div>
                <Table dataArray={isData ? employeesDatas : []} />
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
