import { useSelector } from 'react-redux';
import { selectForm } from '../../utils/selectors';

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
