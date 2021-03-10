// write code for Welcome component here
import React from "react";

function message(props) {
  return (
    <>
      <h1>Hey {props.name}!</h1>
      <h2>Welcome to Newton School.</h2>
    </>
  );
}
export default message;
