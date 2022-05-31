import { Link } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';
import { useEffect, useState } from 'react';
import {
    InputSearch,
    OptionsDropMenu,
    ShowingElements,
    Table,
} from '../../components';
import circleLeftSolid from '../../assets/circle-left-solid.svg';
import { selectEmployees, selectPaging } from '../../utils/selectors';

function EmployeesDataList() {
    const store = useStore();
    const [isData, setIsData] = useState(false);
    const employeeStatus = selectEmployees(store.getState()).status;
    const employeesDatas = useSelector(selectEmployees).response;
    const paging = useSelector(selectPaging);

    useEffect(() => {
        if (employeeStatus === 'resolved' || employeeStatus === 'updated') {
            setIsData(true);
        }
    }, [employeeStatus]);

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
                    elementNbr={paging.endNbr}
                />
                <div className="employees-table-options">
                    {isData ? (
                        <ShowingElements
                            beginNbr={paging.beginNbr}
                            endNbr={paging.endNbr}
                            total={employeesDatas.length}
                        />
                    ) : null}

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
