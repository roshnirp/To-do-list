import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (  // props.users jo data he wo  custom property users se raha he app.js se
          <li key={user.id}>
            {user.name1} ({user.age1} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
