import React, { useState } from "react";

const Form = ({ setUsers, users }) => {
  const [formData, setFormData] = useState({
    username: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.trim().toUpperCase() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username.length < 2) {
      alert("Merci d'entrer au minimum deux charactères.");
      return;
    }
    const user = users.find((user) => user.username === formData.username);
    if (user) {
      alert("Cet utilisateur existe déjà.");
      return;
    }
    setUsers((prev) => [...prev, formData]);
    setFormData({ username: "" });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={formData.username}
        name="username"
        onChange={(e) => handleChange(e)}
      />
      <p>{formData.username}</p>
      <input type="submit" />
    </form>
  );
};

export default Form;
