import React from "react";
class Form extends React.Component{
  render(){
    return(
      <div>
        <form onSubmit={this.props.getWheater}>
        <input type="text" name="city" placeholder="City....." /> <br />
        <input type="text" name="country" placeholder="Country......." /> <br />
        <button> Get Data </button>
        </form>
      </div>
    );
  }
}
export default Form;
