/**
 * Component that implement a message that inform about paging
 * @param {Number} startNbr index of the first element
 * @param {Number} endNbr index of the last element
 * @param {Number} total number of total element
 * @returns {DOMImplementation}
 */
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
