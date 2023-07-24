import React, { useState } from "react";
import User from "../../components/User";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, changeInputAction, deleteAllUsersAction } from "../../redux/actions";

function UsersPage() {
  const [localValue, setLocalValue] = useState("");

  const { users } = useSelector((state) => state.usersReducer);

  const dispatch = useDispatch();

  const changeInput = (event) => {
    dispatch(changeInputAction(event.target.value));
    setLocalValue(event.target.value);
  };

  const addUser = () => {
    dispatch(addUserAction(localValue));
  };

  const deleteAllUsers = () => {
    dispatch(deleteAllUsersAction());
    setLocalValue("");
  };


  return (
    <div>
      <h1>{localValue}</h1>
      <input type="text" placeholder="name" value={localValue} onChange={changeInput}></input>
      <button onClick={addUser}>add</button>
      <button onClick={deleteAllUsers}>delete all</button>

      {users.map((user, idx) => (
        <User key={idx} userName={user} />
      ))}
    </div>
  );
}

export default UsersPage;
