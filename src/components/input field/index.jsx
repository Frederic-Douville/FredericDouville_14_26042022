import { useSelector } from 'react-redux';
import { selectForm } from '../../utils/selectors';

/**
 * Component that implement input field (text,date picker,etc...)
 * @param {String} label label description
 * @param {String} id id of the input
 * @param {String} type type of the input
 * @param {String} errorMsg error message of the input
 * @returns {DOMImplementation}
 */
function InputField({ label, id, type, errorMsg }) {
    const errorStatus = useSelector(selectForm).status;
    return (
        <div className={`form-input-wrapper form-${id}`}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} />
            <div className="form-error-ctn">
                {errorStatus === 'rejected' && errorMsg !== '' ? (
                    <span className="form-error-msg">{errorMsg}</span>
                ) : null}
            </div>
        </div>
    );
}

export default InputField;
