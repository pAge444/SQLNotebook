import React from "react";

import "./SqlQuery.css";

import { useState } from "react";

import run from "../../static/run.svg";

const SqlQuery = (props) => {
  // console.log(props.query);

  const [enteredQuery, setEnteredQuery] = useState(props.query);

  const inputChangeHandler = (event) => {
    setEnteredQuery(event.target.value);
    // console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const finalEnteredQuery = enteredQuery;
    // console.log("final --- ", finalEnteredQuery);
    props.onSaveQuery(finalEnteredQuery);
    window.alert("SQL query fetched!!!"); // You can add your fetch command here or in a new component and add the component
    // here
    // setEnteredQuery("");
  };

  return (
    <div className="input_sql">
      <form className="input_sql_form" onSubmit={submitHandler}>
        <textarea
          className="input_sql_query"
          onChange={inputChangeHandler}
          value={enteredQuery}
        ></textarea>
        <button type="submit" className="btn1 btn2 btn3">
          <img src={run} />
        </button>
      </form>
    </div>
  );
};

export default SqlQuery;
