function InputField({ label, id, type }) {
    return (
        <div className={`form-input-wrapper form-${id}`}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} />
        </div>
    );
}

export default InputField;
