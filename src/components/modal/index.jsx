function Modal({ message, functionBtn }) {
    return (
        <div className="modal-bg">
            <div className="modal-ctn">
                <span className="modal-msg">{message}</span>
                <button className="modal-btn" onClick={functionBtn}>
                    OK
                </button>
            </div>
        </div>
    );
}

export default Modal;
