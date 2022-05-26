import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div className="container">
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{props.alert.type} </strong>
          {props.alert.msge}
        </div>
      </div>
    )
  );
}

export default Alert;
