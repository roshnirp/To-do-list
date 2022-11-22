import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>; 
  //ErrorModel and AddUser and App css use hoga 
};

export default Card;
