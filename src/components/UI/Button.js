import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type1 || 'button'} // addUser.js ke aya type1 
      onClick={props.onClick}  //ErorModal.js 
    >
          {/* 2 // onClick1 ko use karenge button me  */}
          {/* 1 // addUser se aya onconfirm1 */}
      {props.children}
    </button>
  );
};

export default Button;
