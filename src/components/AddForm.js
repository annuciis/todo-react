import React from "react";
import { Button } from "react-bootstrap";

class AddForm extends React.Component {

  state = {
    name: "",
  };

  add = e => {
    e.preventDefault();
    if (this.state.name === "") {
      alert("Todo cannot be empty");
      return;
    }

    this.props.addTodoHandler(this.state);
    this.setState({ name: "" });
  };

render(){
  return (
    <div className="add-box">
      <form onSubmit={this.add}>
        <input
          type="text"
          name="todo"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <Button type="submit"  className="add-button">Add</Button>
      </form>
    </div>
  );
}
};

export default AddForm;
