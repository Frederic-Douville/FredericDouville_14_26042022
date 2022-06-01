import { Link } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';
import { useEffect, useState } from 'react';
import {
    InputSearch,
    OptionsDropMenu,
    ShowingElements,
    Table,
    Paging,
} from '../../components';
import circleLeftSolid from '../../assets/circle-left-solid.svg';
import { selectEmployees, selectPaging } from '../../utils/selectors';
import { getEmployeesData } from '../../features/employees';
import { initializePaging } from '../../features/paging';

function EmployeesDataList() {
    const store = useStore();
    const [isData, setIsData] = useState(false);
    const employeeStatus = selectEmployees(store.getState()).status;
    const employeesDatas = useSelector(selectEmployees).response;
    const paging = useSelector(selectPaging);

    useEffect(() => {
        if (employeeStatus === 'void') {
            getEmployeesData(store);
            window.setTimeout(() => {
                setIsData(true);
            }, 200);
        }
        if (employeeStatus === 'resolved' || employeeStatus === 'updated') {
            setIsData(true);
            initializePaging(store);
        }
    }, [employeeStatus, store]);

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
                <Table
                    dataArray={isData ? employeesDatas : []}
                    startNbr={paging.startNbr}
                    endNbr={paging.endNbr}
                />
                <div className="employees-table-options">
                    {isData ? (
                        <ShowingElements
                            startNbr={paging.startNbr}
                            endNbr={paging.endNbr}
                            total={employeesDatas?.length}
                        />
                    ) : null}
                    <Paging pagesNbr={paging.pagesNbr} />
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
