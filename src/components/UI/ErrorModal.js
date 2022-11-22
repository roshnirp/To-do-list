import React from 'react';
import Card from './Card';
import  ReactDOM  from 'react-dom';
import Button from './Button';
import classes from './ErrorModal.module.css';
//import Wrapper from './Wrapper';

const Backdrop = (props) => {
   return <div className={classes.backdrop} onClick={props.onConfirm} />
}
const ModalOverlay = (props) => {
  return <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
          {/* 2 // onClick1 ko use karenge button me  */}
          {/* 1 // addUser se aya onconfirm1 */}
        </footer>
      </Card>
}
const ErrorModal = (props) => {
  return (
    <React.Fragment>
    {/*  <Wrapper> */}
      {/* <div className={classes.backdrop} onClick1={props.onConfirm1} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title1}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message1}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick1={props.onConfirm1}>Okay</Button>
         
          {/* 2 // onClick1 ko use karenge button me  */}
          {/* 1 // addUser se aya onconfirm1 */}
        {/* </footer> */}
      {/* </Card>  */}
      {/* hame jsx ka code use karna he javascrip me {call karna he reactdom function hota he createPortal 
        ke name se pass 2parameter component name as element likhte he jiska potal banana he , 
        jo ham div ko refer karana chahte he jaha hamko bana he} */}
      {/* Backdrop or modalOverlay function component ka data ham ErrorModal me tranfer karenge  */}
    {ReactDOM.createPortal(<Backdrop onConfirm = {props.onConfirm}/>, document.getElementById("backdrop-root"))}
    {ReactDOM.createPortal(<ModalOverlay 
    title ={props.title}
    message ={props.message}
    onConfirm ={props.onConfirm}/>, document.getElementById("modalOverlay-root"))}
        </React.Fragment>
  );
};

export default ErrorModal;
