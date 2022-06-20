import React, { useState } from "react";

import "./App.css";

import SQLNotebook from "./components/SQLNotebook";

import Header from "./components/UI/Header";

import Documentation from "./components/doc/Doc";

const query_arr = [];
query_arr.push({ id: "1", query: "SELECT * FROM TABLE A_TO_B;" });
query_arr.push({ id: "2", query: "SELECT * FROM TABLE C_TO_D;" });
query_arr.push({ id: "3", query: "SELECT * FROM TABLE E_TO_F;" });

function App() {
  const [queryArray, setQueryArray] = useState(query_arr);

  const [displayData, setDisplayData] = useState("");

  const onDeleteHandler = (_id) => {
    const id = _id;
    setQueryArray((prevQueryArray) => {
      const newQueryArray = [];
      for (let i = 0; i < prevQueryArray.length; i++) {
        if (prevQueryArray[i].id !== id) {
          newQueryArray.push(prevQueryArray[i]);
        }
      }
      return newQueryArray;
    });
  };

  const onAddHandler = (_id) => {
    const id = _id;
    setQueryArray((prevQueryArray) => {
      const newQueryArray = [];
      for (let i = 0; i < prevQueryArray.length; i++) {
        newQueryArray.push(prevQueryArray[i]);
        if (prevQueryArray[i].id === id) {
          newQueryArray.push({ id: Date.now(), query: "" });
        }
      }
      return newQueryArray;
    });
  };

  const onUpdateHandler = (_updatedQuery, _id) => {
    const id = _id;
    const updatedQuery = _updatedQuery;
    // console.log("update..", updatedQuery, id);
    setQueryArray((prevQueryArray) => {
      const newQueryArray = [];
      for (let i = 0; i < prevQueryArray.length; i++) {
        if (prevQueryArray[i].id === id) {
          newQueryArray.push({ id: id, query: updatedQuery });
        } else {
          newQueryArray.push(prevQueryArray[i]);
        }
      }
      return newQueryArray;
    });
  };

  const onHeaderHandler = (_Doc) => {
    const Doc = _Doc;
    setDisplayData(Doc);
  };

  const newDisplayData =
    displayData === "" ? (
      <SQLNotebook
        queries={queryArray}
        onDelete={onDeleteHandler}
        onAdd={onAddHandler}
        onUpdate={onUpdateHandler}
      />
    ) : (
      <Documentation />
    );

  return (
    <div className="App">
      <Header onHeader={onHeaderHandler} />
      {newDisplayData}
    </div>
  );
}

export default App;
