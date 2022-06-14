import { useSelector, useStore } from 'react-redux';
import { employeesSearched } from '../../features/employees';
import { choosePaging, searchPaging } from '../../features/paging';
import { selectEmployees, selectPaging } from '../../utils/selectors';

function InputSearch() {
    const store = useStore();
    const employeesDatas = useSelector(selectEmployees).response;
    const choicePaging = useSelector(selectPaging).choice;

    /**function that compare the search input value with the employees data keys to find matches */
    function mainSearch() {
        var contentSearch = document.getElementById('input-search').value;
        if (contentSearch.length >= 2) {
            var filterArray = employeesDatas.filter((obj) => {
                return Object.keys(obj).some((key) => {
                    if (typeof obj[key] === 'string') {
                        var matchObject =
                            obj[key].toLowerCase().startsWith(contentSearch) ||
                            obj[key].includes(contentSearch);
                    }
                    return matchObject;
                });
            });
            store.dispatch(employeesSearched([true, filterArray]));
            searchPaging(store, filterArray);
        }
        if (contentSearch.length === 0) {
            store.dispatch(employeesSearched([false, []]));
            choosePaging(store, choicePaging);
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
