function ShowingElements({ startNbr, endNbr, total }) {
    return (
        <div className="showing-ctn">
            <span className="showing-text">
                Showing {startNbr === 0 ? '1' : startNbr} to {endNbr} of {total}{' '}
                entries.
            </span>
        </div>
    );
}

export default ShowingElements;
