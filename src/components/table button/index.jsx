import caretUp from '../../assets/caret-up-solid.svg';
import caretDown from '../../assets/caret-down-solid.svg';
import { useSelector, useStore } from 'react-redux';
import { selectEmployees } from '../../utils/selectors';
import { employeesSorted } from '../../features/employees';

function TableButton({ name }) {
    const store = useStore();
    const employeesData = useSelector(selectEmployees).response;

    function sortEmployees(event) {
        const arrowArray = event.currentTarget.getAttribute('id').split('-');
        const arrowName = arrowArray[0];
        const arrowDirection = arrowArray[1];
        var newData = employeesData.map((item) =>
            Object.assign({}, item, { selected: false })
        );

        if (arrowName === 'firstname') {
            arrowDirection === 'up'
                ? newData.sort((a, b) => a.firstname.localeCompare(b.firstname))
                : newData.sort((a, b) =>
                      b.firstname.localeCompare(a.firstname)
                  );
            store.dispatch(employeesSorted(newData));
        }
        if (arrowName === 'lastname') {
            arrowDirection === 'up'
                ? newData.sort((a, b) => a.lastname.localeCompare(b.lastname))
                : newData.sort((a, b) => b.lastname.localeCompare(a.lastname));
            store.dispatch(employeesSorted(newData));
        }
        if (arrowName === 'department') {
            arrowDirection === 'up'
                ? newData.sort((a, b) =>
                      a.department.localeCompare(b.department)
                  )
                : newData.sort((a, b) =>
                      b.department.localeCompare(a.department)
                  );
            store.dispatch(employeesSorted(newData));
        }
        if (arrowName === 'street') {
            arrowDirection === 'up'
                ? newData.sort((a, b) => a.street.localeCompare(b.street))
                : newData.sort((a, b) => b.street.localeCompare(a.street));
            store.dispatch(employeesSorted(newData));
        }
        if (arrowName === 'city') {
            arrowDirection === 'up'
                ? newData.sort((a, b) => a.city.localeCompare(b.city))
                : newData.sort((a, b) => b.city.localeCompare(a.city));
            store.dispatch(employeesSorted(newData));
        }
        if (arrowName === 'state') {
            arrowDirection === 'up'
                ? newData.sort((a, b) => a.state.localeCompare(b.state))
                : newData.sort((a, b) => b.state.localeCompare(a.state));
            store.dispatch(employeesSorted(newData));
        }
        if (arrowName === 'birthday') {
            arrowDirection === 'up'
                ? newData.sort(
                      (a, b) => new Date(a.birthday) - new Date(b.birthday)
                  )
                : newData.sort(
                      (a, b) => new Date(b.birthday) - new Date(a.birthday)
                  );
            store.dispatch(employeesSorted(newData));
        }
        if (arrowName === 'startday') {
            arrowDirection === 'up'
                ? newData.sort(
                      (a, b) => new Date(a.startday) - new Date(b.startday)
                  )
                : newData.sort(
                      (a, b) => new Date(b.startday) - new Date(a.startday)
                  );
            store.dispatch(employeesSorted(newData));
        }
        if (arrowName === 'zipcode') {
            arrowDirection === 'up'
                ? newData.sort((a, b) => a.zipcode - b.zipcode)
                : newData.sort((a, b) => b.zipcode - a.zipcode);
            store.dispatch(employeesSorted(newData));
        }
    }
    return (
        <div className="table-btn-ctn">
            <button
                className="table-btn"
                id={`${name}-up`}
                onClick={sortEmployees}
            >
                <img src={caretUp} alt="button up" />
            </button>
            <button
                className="table-btn"
                id={`${name}-down`}
                onClick={sortEmployees}
            >
                <img src={caretDown} alt="button down" />
            </button>
        </div>
    );
}

export default TableButton;
