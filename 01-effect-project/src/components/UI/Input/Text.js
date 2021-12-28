import React, { useRef, useImperativeHandle } from "react";

import classes from "./Text.module.css";

const Text = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const _focus = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return { focus: _focus };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={inputRef}
      />
    </div>
  );
});

export default Text;
