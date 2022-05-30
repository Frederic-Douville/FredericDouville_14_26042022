function InputSearch() {
    return (
        <div className="search-bar-ctn">
            <label htmlFor="input-search" className="search-bar-label">
                Search:{' '}
            </label>
            <input
                type="search"
                id="input-search"
                className="search-bar-input"
            />
        </div>
    );
}

export default InputSearch;
