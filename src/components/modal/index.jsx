/**
 * Component that implement a modal
 * @param {String} text text show in the modal
 * @param {Function} functionBtn function that will be activate when user click on the modal button
 * @param {String} textBtn text show in the modal button
 * @returns {DOMImplementation}
 */
function Modal({ text, functionBtn, textBtn }) {
    return (
        <div className="modal-bg">
            <div className="modal-ctn">
                <span className="modal-msg">{text}</span>
                <button className="modal-btn" onClick={functionBtn}>
                    {textBtn}
                </button>
            </div>
        </div>
    );
}

export default Modal;
