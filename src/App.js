import React, { useState } from 'react';
import Wrapper from './components/UI/Wrapper';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => { //adduser se piche se arha he uName, uAge
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name1: uName, age1: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Wrapper> 
      {/* wrapping component nhi bana to ham krenge  React.Fragment Wapper component banane se coding likhna reduce hua or div likhe ki need nhi */}
      <AddUser onAddUser={addUserHandler} /> 
      {/* //AddUser se value yaha addUserHandler me ak copy ho gai 2 way binging se  */}
      <UsersList users={usersList} />
    </Wrapper>
  );
}

export default App;
