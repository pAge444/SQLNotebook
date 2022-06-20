import React from "react";

import "./Table.css";

import TableData from "./TableData";

const Table = (props) => {
  // console.log(props.query);

  const createTable = props.query !== "" ? <TableData /> : <div></div>;

  return <div className="table_container">{createTable}</div>;
};

export default Table;
