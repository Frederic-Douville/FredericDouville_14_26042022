function ShowingElements({ beginNbr, endNbr, total }) {
    return (
        <div className="showing-ctn">
            <span className="showing-text">
                Showing {beginNbr} to {endNbr} of {total} entries.
            </span>
        </div>
    );
}

export default ShowingElements;
