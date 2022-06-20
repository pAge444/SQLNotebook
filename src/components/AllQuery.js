import React from "react";

import { useState } from "react";

import "./AllQuery.css";

import Table from "./table/Table";

import SqlQuery from "./input/SqlQuery";

import right_arrow from "../static/right_arrow.svg";

import delete_img from "../static/delete.svg";

import add_img from "../static/add.svg";

import expand from "../static/expand.svg";

const Queries = (props) => {
  const onSaveQueryHandler = (enteredQuery) => {
    const query = enteredQuery;
    // console.log("AllQuery ----- ", query);
    props.onGetQuery(query, props.id);
  };

  const [arrow, setArrow] = useState(right_arrow);

  const onDeleteHandler = () => {
    // console.log("DELETE........", props.id);
    props.onDeleteQuery(props.id);
  };

  const onAddHandler = () => {
    // console.log("ADD.........", props.id);
    props.onAddQuery(props.id);
  };

  const onHideHandler = (event) => {
    arrow === right_arrow ? setArrow(expand) : setArrow(right_arrow);
  };

  const displayTable =
    arrow === right_arrow ? <Table query={props.query} /> : <div></div>;

  return (
    <div className="all_queries_display">
      <div className="all_query_left_side">
        <button className="btn1" onClick={onHideHandler}>
          <img src={arrow} />
        </button>
      </div>
      <div className="all_query_right_side">
        <SqlQuery
          onSaveQuery={onSaveQueryHandler}
          id={props.id}
          query={props.query}
        />

        {displayTable}

        <button className="btn1 btn2 btn3" onClick={onDeleteHandler}>
          <img src={delete_img} />
        </button>

        <button className="btn1 btn2" onClick={onAddHandler}>
          <img src={add_img} />
        </button>
      </div>
    </div>
  );
};

export default Queries;
