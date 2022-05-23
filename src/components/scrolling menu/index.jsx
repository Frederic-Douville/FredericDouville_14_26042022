import { useSelector } from 'react-redux';
import { selectForm } from '../../utils/selectors';

function ScrollingMenu({ label, id, optionArray, errorMsg }) {
    const errorStatus = useSelector(selectForm).status;
    return (
        <div className={`form-input-wrapper form-${id}`}>
            <label htmlFor={id}>{label}</label>
            <select id={id}>
                <option defaultValue={''} hidden></option>
                {optionArray.map((optionElem, index) => (
                    <option key={index} value={optionElem}>
                        {optionElem}
                    </option>
                ))}
            </select>
            <div className="form-error-ctn">
                {errorStatus === 'rejected' && errorMsg !== '' ? (
                    <span className="form-error-msg">{errorMsg}</span>
                ) : null}
            </div>
        </div>
    );
}

export default ScrollingMenu;
