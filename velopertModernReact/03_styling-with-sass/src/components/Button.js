import React from "react";
import classNames from "classnames";
import "./Button.scss";

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <button
      className={classNames("Button", color, size, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
