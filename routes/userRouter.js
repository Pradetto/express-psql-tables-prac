const Router = require("express-promise-router");
const router = new Router();

// controller
const { usersController } = require("../controllers/userController");

router.get("/users", usersController.getAll);

router.post("/users", usersController.createUser);

module.exports = router;
