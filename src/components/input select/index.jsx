import { useSelector } from 'react-redux';
import { selectForm } from '../../utils/selectors';

/**
 * Component that implement a select input field
 * @param {String} label label of the select input
 * @param {String} id id of the select input
 * @param {Array} optionArray array of options
 * @param {Array} optionArrayStates array of objects that contains name and abbreviation key
 * @param {String} errorMsg error message of the select input
 * @returns {DOMImplementation}
 */
function InputSelect({ label, id, optionArray, optionArrayStates, errorMsg }) {
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

export default InputSelect;
