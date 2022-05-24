import caretUp from '../../assets/caret-up-solid.svg';
import caretDown from '../../assets/caret-down-solid.svg';

function TableButton() {
    return (
        <div className="table-btn-ctn">
            <button className="table-btn">
                <img src={caretUp} alt="button up" />
            </button>
            <button className="table-btn">
                <img src={caretDown} alt="button down" />
            </button>
        </div>
    );
}

export default TableButton;
