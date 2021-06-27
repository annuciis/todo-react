import './Modal.css'

const ModalWindow = props => {


return (
    <div className={props.style}>
        <div className="modal-content">
            <p>Do you really want to delete this todo?</p>
            <p className="todo-text">{props.name}</p>
            <div className="modal-buttons">
                <button className="confirm" onClick={props.confirm}>Confirm</button>
                <button className="close" onClick={props.close}>Close</button>   
            </div>
        </div>    
    </div>        
);

}

export default ModalWindow;