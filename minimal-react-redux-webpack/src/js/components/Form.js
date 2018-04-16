import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";
import { testAction } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article)),
    testAction: test => dispatch(testAction(test))
  };
};

const mapStateToProps = state => {
  return { title: state.title };
};

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      test: "test1"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
      }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.props.testAction("test2032");
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

 ConnectedForm.propTypes = {
   addArticle: PropTypes.func.isRequired
 };

export default Form;
