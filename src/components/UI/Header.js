import React from "react";

import "./Header.css";

import add from "../../static/add.svg";

const Header = (props) => {
  const onDocClickHandler = () => {
    console.log("Documentation");
    props.onHeader("Documentation");
  };

  const onSQLClickHandler = () => {
    props.onHeader("");
  };

  const onAddQueryHandler = () => {
    props.onAddFirstQuery();
  };

  return (
    <div className="header">
      <h2 className="head1" onClick={onSQLClickHandler}>
        SQLNotebook
      </h2>
      <h3 className="head1 head2" onClick={onDocClickHandler}>
        Documentation
      </h3>
      <h3 className="head1 head2 btn4" onClick={onAddQueryHandler}>
        <img src={add} />
      </h3>
    </div>
  );
};

export default Header;
