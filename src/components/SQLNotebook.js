import React from "react";

import "./SQLNotebook.css";

import AllQuery from "./AllQuery";

const SQLNotebook = (props) => {
  // console.log(props.queries);

  const onGetQueryHandler = (_enteredQueryData, _id) => {
    const enteredQueryData = _enteredQueryData;
    const id = _id;
    // console.log("SQLNotebook----", enteredQueryData);
    props.onUpdate(enteredQueryData, id);
  };

  const onDeleteQueryHandler = (_idOfQueryToDelete) => {
    const idOfQueryToDelete = _idOfQueryToDelete;
    // console.log("Delete.....", idOfQueryToDelete);
    props.onDelete(idOfQueryToDelete);
  };

  const onAddQueryHandler = (_idOfQueryToAdd) => {
    const idOfQueryToAdd = _idOfQueryToAdd;
    // console.log("Add........", idOfQueryToAdd);
    props.onAdd(idOfQueryToAdd);
  };

  const newQueries = [];
  const createNewArray = () => {
    // console.log(props.queries.length);
    for (let i = 0; i < props.queries.length; i++) {
      newQueries.push(
        <AllQuery
          key={props.queries[i].id}
          id={props.queries[i].id}
          query={props.queries[i].query}
          onGetQuery={onGetQueryHandler}
          onDeleteQuery={onDeleteQueryHandler}
          onAddQuery={onAddQueryHandler}
        />
      );
    }
  };

  createNewArray();
  // console.log(newQueries);

  return <div>{newQueries}</div>;
};

export default SQLNotebook;
