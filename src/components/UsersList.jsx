import React from "react";

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map((user, i) => (
        <li key={i}>{user.username}</li>
      ))}
    </ul>
  );
};

export default UsersList;
