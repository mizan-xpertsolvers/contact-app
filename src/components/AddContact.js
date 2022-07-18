import PropTypes from "prop-types";
import React from "react";

class AddContact extends React.Component {
  contextTypes = {
    router: PropTypes.object
  }
  
  state = {
    id: null,
    name: "",
    email: "",
  };
  add = (e) => {
    this.context.router.history.push("/");
    e.preventDefault();
    this.props.addContactHandler(this.state);
    this.setState({id: null, name: "", email: "" });
    
    //history.push('/');
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact </h2>
        <form className="ui form" onSubmit={this.add}>
        <div className="field">
            <label>Id</label>
            <input
              type="text"
              name="id"
              placeholder="Please input id"
              onChange={(e) => this.setState({ id: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Please input name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Please input valid email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
