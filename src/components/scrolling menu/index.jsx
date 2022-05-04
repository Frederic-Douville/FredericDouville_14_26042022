function ScrollingMenu({ name, optionArray }) {
    return (
        <div className={`form-input-wrapper form-${name.toLowerCase()}`}>
            <label htmlFor={name.toLowerCase()}>{name}</label>
            <select id={name.toLowerCase()}>
                {optionArray.map((optionElem) => (
                    <option value={optionElem.toLowerCase()}>
                        {optionElem}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ScrollingMenu;
