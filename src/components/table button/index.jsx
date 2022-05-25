import caretUp from '../../assets/caret-up-solid.svg';
import caretDown from '../../assets/caret-down-solid.svg';

function TableButton({ name }) {
    function showClassName(event) {
        console.log(event.currentTarget.getAttribute('class'));
    }
    return (
        <div className="table-btn-ctn">
            <button className={`table-btn ${name}-up`} onClick={showClassName}>
                <img src={caretUp} alt="button up" />
            </button>
            <button
                className={`table-btn ${name}-down`}
                onClick={showClassName}
            >
                <img src={caretDown} alt="button down" />
            </button>
        </div>
    );
}

export default TableButton;
