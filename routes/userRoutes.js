const router = require("express").Router();
const userControllers = require("../controllers/userControllers");

router.post("/api/users", userControllers.createUser);

// get route

router.get("/api/users", userControllers.getallUsers);

// Get User by id

router.get("/api/users/:id", userControllers.getById);

// Update User

router.put("/api/users/:id", userControllers.updateUser);

/// Delete a Resource

router.delete("/api/users/:id", userControllers.deleteUser);
