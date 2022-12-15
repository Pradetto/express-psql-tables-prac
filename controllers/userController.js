const { User } = require("../models/Users");

const usersController = {
  async getAll(req, res) {
    try {
      const users = await User.getAll();
      res.send(users);
    } catch (err) {
      console.error("Error getting users", err.stack);
      res.status(500).send("Error getting users");
    }
  },
  async createUser(req, res) {
    try {
      const user = await User.create(req.body.username, req.body.password);
      res.send(user);
    } catch (err) {
      console.error("Error creating user:", err.stack);
      res.status(500).send("Error creating user");
    }
  },
};

module.exports = {
  usersController,
};
