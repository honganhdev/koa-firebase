const Router = require("koa-router");
const helloWorldController = require("../handlers/controllers/helloWorldController");
const todoController = require("../handlers/controllers/todoController");

const router = new Router({
  prefix: "/api",
});

router.get("/helloWorld", helloWorldController.hello);

router.get("/todos", todoController.getTodos);
router.post("/todos", todoController.saveTodo);
router.patch("/todos/:id", todoController.updateTodos);
router.delete("/todos/:id", todoController.deleteTodo);

module.exports = router;
