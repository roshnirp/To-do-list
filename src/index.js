import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// portals ham use karte he overway components ke liye jo additional components hote he jo ek main component ke upar aate he wo component overway component hote he 
//overlay component ko ham main component ke bahar banate he ek alag division me jisse css effect na ho .....
root.render(<App />);