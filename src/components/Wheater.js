import React from "react";

class Wheater extends React.Component{
  render(){
    return(

      <div>
      {this.props.city && this.props.country && <p>Location:  {this.props.city}, {this.props.country}</p>}
      {this.props.temperature &&  <p>Temperature: {this.props.temperature},</p>}
      {this.props.humidity && <p>Humidity: {this.props.humidity},</p> }
      {this.props.visibility &&  <p>Visibility: {this.props.visibility}</p>}
      {this.props.errors &&  <p>Sorry: {this.props.errors}</p>}
      </div>

    );
  }
}
export default Wheater;
