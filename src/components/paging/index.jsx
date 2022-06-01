import { useStore } from 'react-redux';
import { changeOfPage } from '../../features/paging';

function Paging({ pagesNbr }) {
    var pagesArray = [];
    for (var i = 0; i < pagesNbr; i++) {
        pagesArray.push(i + 1);
    }
    const store = useStore();
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
