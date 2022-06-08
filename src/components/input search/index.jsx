import { useSelector, useStore } from 'react-redux';
import { employeesSearched } from '../../features/employees';
import { initializePaging, searchPaging } from '../../features/paging';
import { selectEmployees } from '../../utils/selectors';

function InputSearch() {
    const store = useStore();
    const employeesDatas = useSelector(selectEmployees).response;

    /**function that compare the search input value with the employees data keys to find matches */
    function mainSearch() {
        var contentSearch = document.getElementById('input-search').value;
        var searchArray = [];
        if (contentSearch.length >= 2) {
            for (var i in employeesDatas) {
                var valueArray = Object.values(employeesDatas[i]);
                for (var j in valueArray) {
                    if (typeof valueArray[j] === 'string') {
                        if (
                            valueArray[j]
                                .toLowerCase()
                                .startsWith(contentSearch) ||
                            valueArray[j].includes(contentSearch)
                        ) {
                            searchArray.push(employeesDatas[i]);
                        }
                    }
                }
            }
            store.dispatch(employeesSearched([true, searchArray]));
            searchPaging(store, searchArray);
        }
        if (contentSearch.length === 0) {
            store.dispatch(employeesSearched([false, []]));
            initializePaging(store);
        }
    }
    return (
        <div className="search-bar-ctn">
            <label htmlFor="input-search" className="search-bar-label">
                Search:{' '}
            </label>
            <input
                type="search"
                id="input-search"
                className="search-bar-input"
                onKeyUp={mainSearch}
            />
        </div>
    );
}

export default InputSearch;
