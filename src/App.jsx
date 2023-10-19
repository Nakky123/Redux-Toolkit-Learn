import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "./Features/Users";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.usersz.value);
  console.log("userList:", userList);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newName, setNewName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [editId, setEditId] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleUpdate = (id) => {
    dispatch(updateUser({ id: id, name: newName, username: newUsername }));
    setEditId(null);
    setNewName("");
    setNewUsername("");
  };

  return (
    <div className="App">
      <div className="addUser">
        <input
          className="inputField"
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          className="inputField"
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          className="addButton"
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUser">
        {userList.map((user) => {
          return (
            <div key={user.id} className="userContainer">
              {editId === user.id ? (
                <div className="editContainer">
                  <input
                    className="editInput"
                    type="text"
                    value={newName}
                    onChange={(event) => setNewName(event.target.value)}
                  />
                  <input
                    className="editInput"
                    type="text"
                    value={newUsername}
                    onChange={(event) => setNewUsername(event.target.value)}
                  />
                  <button
                    className="saveButton"
                    onClick={() => handleUpdate(user.id)}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="userInfoContainer">
                  <h1>ID: {user.id}</h1>
                  <h1>Name: {user.name}</h1>
                  <h1>Username: {user.username}</h1>
                  <button
                    className="deleteButton"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="editButton"
                    onClick={() => setEditId(user.id)}
                  >
                    Update
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
