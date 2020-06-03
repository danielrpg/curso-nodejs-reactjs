const users = [
  {
    id: 1,
    name: "Daniel",
    email: "daniel@gmail.com",
    password: "admin123",
    role: "ROLE_USER",
    state: true,
  },
  {
    id: 2,
    name: "gilmer",
    email: "gilmer@gmail.com",
    password: "admin123",
    role: "ROLE_USER",
    state: true,
  },
];

const posts = [
  {
    id: 1,
    userId: 1,
    title: "Hello World",
    description: "lorem ipsum",
    comments: [],
  },
  {
    id: 2,
    userId: 2,
    title: "Hello World",
    description: "lorem ipsum",
    comments: [],
  },
  {
    id: 3,
    userId: 1,
    title: "Hello World",
    description: "lorem ipsum",
    comments: [],
  }
];

module.exports = {
  users,
  posts
};
