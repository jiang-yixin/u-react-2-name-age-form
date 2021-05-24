import { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age, > 0",
      });
      return;
    }

    console.log(enteredUsername, enteredAge);

    props.onAddNewUser(enteredUsername, enteredAge);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorModalHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorModalHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Year)</label>
          <input id="age" type="text" ref={ageInputRef} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
