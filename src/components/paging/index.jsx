import { useStore } from 'react-redux';
import { changeOfPage } from '../../features/paging';

/**
 * Component that implement paging
 * @param {Number} pagesNbr number of pages
 * @returns {DOMImplementation}
 */
function Paging({ pagesNbr }) {
    const store = useStore();

    /**Creation of an array that list the pages */
    var pagesArray = [];
    for (var i = 0; i < pagesNbr; i++) {
        pagesArray.push(i + 1);
    }

    /**Function that call a function to change the page to implement */
    function changePage(event) {
        const pageChoice = event.currentTarget.getAttribute('id').split('-')[1];
        changeOfPage(store, pageChoice);
    }

    return (
        <div className="paging-pages-ctn">
            {pagesArray.map((elem, index) => (
                <span
                    key={index}
                    className="paging-pages-link"
                    id={`page-${elem}`}
                    onClick={changePage}
                >
                    {elem}
                </span>
            ))}
        </div>
    );
}

export default Paging;
