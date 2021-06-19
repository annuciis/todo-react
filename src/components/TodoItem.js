import React from 'react';
import { Row, Col} from 'react-bootstrap';



const TodoItem = (props) => {

    const {id, name} = props.todoprop;

    return (
        <li className="item-box">
            <Row>
                <Col>
                    <p>{name}</p>
                </Col>
                <Col>
                    <i className="far fa-trash-alt delete" onClick={() => {props.clickHandler(id)}}></i>
                </Col>
            </Row>
        </li>
    );
}

export default TodoItem;