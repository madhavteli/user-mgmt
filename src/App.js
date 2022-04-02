import React, {useState} from 'react';
import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (enteredUsername, enteredAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, {name: enteredUsername, age:enteredAge, id:Math.random().toString()}];
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
