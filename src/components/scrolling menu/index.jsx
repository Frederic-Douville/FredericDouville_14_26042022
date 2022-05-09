function ScrollingMenu({ label, id, optionArray }) {
    return (
        <div className={`form-input-wrapper form-${id}`}>
            <label htmlFor={id}>{label}</label>
            <select id={id}>
                <option value="" disabled selected hidden></option>
                {optionArray.map((optionElem, index) => (
                    <option key={index} value={optionElem.toLowerCase()}>
                        {optionElem}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ScrollingMenu;
