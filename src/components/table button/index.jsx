import caretUp from '../../assets/caret-up-solid.svg';
import caretDown from '../../assets/caret-down-solid.svg';
import { useSelector, useStore } from 'react-redux';
import { selectEmployees } from '../../utils/selectors';
import { employeesSorted } from '../../features/employees';

/**
 * Component that implement sorting button
 * @param {String} name name of the id button
 * @returns {DOMImplementation}
 */
function TableButton({ name }) {
    const store = useStore();
    const employeesData = useSelector(selectEmployees).response;

    /**Function that sort the elements  */
    function sortEmployees(event) {
        const arrowArray = event.currentTarget.getAttribute('id').split('-');
        const arrowName = arrowArray[0];
        const arrowDirection = arrowArray[1];
        var newData = employeesData.map((item) =>
            Object.assign({}, item, { selected: false })
        );
        if (
            arrowName === 'firstname' ||
            arrowName === 'lastname' ||
            arrowName === 'department' ||
            arrowName === 'street' ||
            arrowName === 'city' ||
            arrowName === 'state'
        ) {
            arrowDirection === 'up'
                ? newData.sort((a, b) =>
                      a[arrowName].localeCompare(b[arrowName])
                  )
                : newData.sort((a, b) =>
                      b[arrowName].localeCompare(a[arrowName])
                  );
        }
        if (arrowName === 'birthday' || arrowName === 'startday') {
            arrowDirection === 'up'
                ? newData.sort(
                      (a, b) => new Date(a[arrowName]) - new Date(b[arrowName])
                  )
                : newData.sort(
                      (a, b) => new Date(b[arrowName]) - new Date(a[arrowName])
                  );
        }
        if (arrowName === 'zipcode') {
            arrowDirection === 'up'
                ? newData.sort((a, b) => a[arrowName] - b[arrowName])
                : newData.sort((a, b) => b[arrowName] - a[arrowName]);
        }
        store.dispatch(employeesSorted(newData));
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
