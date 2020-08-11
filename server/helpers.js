let users = [];

const addUser = (id, name, room) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const exists = users.find((user) => user.name === name && user.room === room);
  if (exists) {
    return { error: "User name is taken" };
  }
  const user = { id, name, room };
  users.push(user);
  return { user };
};

const getUser = (id) => users.find((user) => user.id === id);

const removeUser = (id) => {
  const user = users.find((user) => user.id === id);
  if (user) {
    users = users.filter((user) => user.id !== id);
  }
  return user;
};

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, getUser, removeUser, getUsersInRoom };
