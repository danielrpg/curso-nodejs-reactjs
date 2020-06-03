const { v4: uuidv4 } = require("uuid");
const { posts } = require("../db/database");

const getPosts = () => {
  return posts;
};

const getPost = (postId) => {
  return posts.find((post) => post.id == postId);
};

const createPost = (userId, title, description, comments = []) => {
  let post = {
    id: uuidv4(),
    userId,
    title,
    description,
    comments
  };

  posts.push(post);
  return post;
};

const updatePost = (id, userId, title, description, comments = []) => {
  let postIndex = posts.findIndex((post) => post.id === id);
  if (!postIndex <= -1) {
    return null;
  }

  posts[postIndex].userId = userId;
  posts[postIndex].title = title;
  posts[postIndex].description = description;
  posts[postIndex].comments = comments;

  return posts[postIndex];
};

const deletePost = (id) => {
  let postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex < 0) {
    return null;
  }

  return posts.splice(postIndex, 1);
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
