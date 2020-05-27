const { v4 } = require("uuid");
const { users } = require("../db/database");

const getUsers = () => {
  return users;
};

const getUser = (userId) => {
  return users.find((user) => user.id == userId);
};

const createUser = (name, email, password, tole) => {
  let user = {
    id: uuidv4(),
    name,
    email,
    password,
    role,
    state: true,
  };

  users.push(user);
  return user;
};

const updateUser = (id, name, email, password, role, state = true) => {
  let userIndex = users.findeIndex((user) => user.id === id);
  if (!userIndex <= -1) {
    return null;
  }

  users[userIndex].name = name;
  users[userIndex].email = email;
  users[userIndex].password = password;
  users[userIndex].role = role;
  users[userIndex].state = state;

  return users[userIndex];
};

const deleteUser = (id) => {
  let userIndex = users.findeIndex((user) => user.id === id);
  if (userIndex < 0) {
    return null;
  }

  return users.splice(userIndex, 1);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
