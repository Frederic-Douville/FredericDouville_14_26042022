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
