import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";
import { testAction } from "../actions/index";

const mapStateToProps = state => {
    return { title : state.title };
  };

class displayTitle extends Component {

    constructor() {
        super();
        this.state = {
            title:'default'
        };
    }

    // componentDidUpdate(titles) {
    //     console.log("passed into update")
    //     this.setState( {title : titles});
    // }

    // componentWillUpdate(titles)
    // {
    //     console.log("passed into will update")
    //     this.setState( {title : titles});
    // }

        render() {
            const {title} = this.state;
            return (
                <div className="form-group">
                <h1>title is : {this.props.title} </h1>
                </div>
            );
          }
}

const Title = connect(mapStateToProps, null)(displayTitle);

export default Title;