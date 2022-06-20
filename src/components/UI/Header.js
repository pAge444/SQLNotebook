import React from "react";

import "./Header.css";

const Header = (props) => {
  const onDocClickHandler = () => {
    console.log("Documentation");
    props.onHeader("Documentation");
  };

  const onSQLClickHandler = () => {
    props.onHeader("");
  };

  return (
    <div className="header">
      <h2 className="head1" onClick={onSQLClickHandler}>
        SQLNotebook
      </h2>
      <h3 className="head1 head2" onClick={onDocClickHandler}>
        Documentation
      </h3>
    </div>
  );
};

export default Header;
