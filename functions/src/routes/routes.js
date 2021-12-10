const Router = require("koa-router");
const helloWorldController = require("../handlers/controllers/helloWorldController");
const todoController = require("../handlers/controllers/todoController");

const router = new Router({
  prefix: "/api",
});

router.get("/helloWorld", helloWorldController.hello);

router.get("/todos", todoController.getTodos);
router.post("/todos", todoController.saveTodo);
router.patch("/todos", todoController.updateTodos);
router.delete("/todos", todoController.deleteTodo);

module.exports = router;
