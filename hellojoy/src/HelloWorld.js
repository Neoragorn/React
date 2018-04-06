import React from 'react';

import './Hello.css';
 
class HelloWorld extends React.Component
{
    constructor(props){
        super(props);
           this.state={
              message: this.props.message,
              classname: this.props.classname 
            };
         }

    render() {
        return (
          <div id="helloid" className={this.props.classname} >{this.props.message}</div>
        );
      }
}

export default HelloWorld;