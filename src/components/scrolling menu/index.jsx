import { useSelector } from 'react-redux';
import { selectForm } from '../../utils/selectors';

function ScrollingMenu({
    label,
    id,
    optionArray,
    optionArrayStates,
    errorMsg,
}) {
    const errorStatus = useSelector(selectForm).status;
    return (
        <div className={`form-input-wrapper form-${id}`}>
            <label htmlFor={id}>{label}</label>
            <select id={id}>
                <option defaultValue={''} hidden></option>
                {optionArray
                    ? optionArray.map((optionElem, index) => (
                          <option key={index} value={optionElem}>
                              {optionElem}
                          </option>
                      ))
                    : optionArrayStates.map((optionElem, index) => (
                          <option key={index} value={optionElem.abbreviation}>
                              {optionElem.name}
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
