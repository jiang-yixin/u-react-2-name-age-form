import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
    const [usersList, setUsersList] = useState([]);
    
    const addUserHandler = (name, age) => {
        setUsersList((prevState) => [...prevState, {
            name,
            age,
            id: Math.random().toString(),
        }]);
    };

  return (
    <div>
      <AddUser onAddNewUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
