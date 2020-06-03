const express = require("express");
const { getPosts, getPost, createPost, updatePost, deletePost } = require("../models/post");

const app = express();

//get all posts in DB
app.get("/posts", (req, res) => {
  let posts = getPosts();
  if (!posts) {
    return res.status(400).json({
      ok: false,
      message: "A ocurrido un error inesperado",
    });
  }
  let total = posts.length;
  res.json({
    ok: true,
    posts,
    total,
  });
});

//get un post by id: /post/1
app.get("/posts/:postId", (req, res) => {
  let postId = req.params.postId;
  let post = getPost(postId);
  if (!post) {
    return res.status(400).json({
      ok: false,
      err: "no se puede encontrar el post",
    });
  }

  res.json({
    ok: true,
    post,
  });
});

//post create a new post
app.post("/posts/", (req, res) => {
  let body = req.body;
  let postDB = createPost(body.userId, body.title, body.description, body.comments);
  if(!postDB) {
      res.status(400).json({
          ok: false,
          
      })
  }

  res.json({
      ok: true,
      post: postDB
  })
});

//put update post
app.put('/posts/:postId', (req, res) =>{
  let postId = req.params.postId;
  let body = req.body;

  let postDB = updatePost(postId, body.userId, body.title, body.description, body.comments);
  if(!postDB) {
      return res.status(400).json({
          ok: false,
          err: "No es posible actualizar el post"
      });
  }
  res.json({
      ok: true,
      post: postDB
  });
});

//delete delete post
app.delete('/posts/:postId', (req, res) => {
  let postId = req.params.postId;
  let removed = deletePost(postId);
  
  if(!removed) {
      return res.status(400).json({
          ok: false,
          err: "No es posible eliminar el post"
      });
  }
  res.json({
      ok: true,
      post: removed
  });
});

module.exports = app;
