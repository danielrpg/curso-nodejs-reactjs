const express = require("express");
const { getUsers, getUser } = require("../models/user");

const app = express();

//get
app.get("/users", (req, res) => {
  let users = getUsers();
  if (!users) {
    return res.status(400).json({
      ok: false,
      message: "A ocurrido un error inesperado",
    });
  }
  let total = users.lenght;
  res.json({
    ok: true,
    users,
    total,
  });
});

//get un user by id: /user/1
app.get("/users/:userId", (req, res) => {
  let userId = req.params.userId;
  let user = getUser(userId);
  if (!user) {
    return res.status(400).json({
      ok: false,
      err: "no se puede encontrar el usuario",
    });
  }

  res.json({
    ok: true,
    user,
  });
});

//post
app.post("/users/", (res, req) => {
  let body = req.body;
  let userDB = createUser(body.name, body.email, body.password, );
  if(!userDB) {
      res.status(400).json({
          ok: false,
          
      })
  }

  res.json({
      ok: true,
      user: userDB;
  })
});

//put
app.put();

//delete
app.delete();

module.exports = app;
