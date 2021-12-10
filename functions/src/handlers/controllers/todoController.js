const {
  getAll: getAllTodo,
  add: addTodo,
  del: delTodo,
  update: updateTodo,
} = require("../repositories/todoRepository");

/**
 *
 * @param ctx
 * @returns {Promise<void>}
 */

async function getTodos(ctx) {
  try {
    const todos = await getAllTodo();
    ctx.body = {
      data: todos,
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message,
    };
  }
}

/**
 *
 * @param ctx
 * @returns {Promise<void>}
 */
async function saveTodo(ctx) {
  const postData = ctx.req.body;
  console.log(postData);
  try {
    const data = await addTodo(postData);
    ctx.status = 201;
    return (ctx.body = {
      success: true,
      data: data,
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
}

/**
 *
 * @param ctx
 * @returns {Promise<void>}
 */

async function deleteTodo(ctx) {
  try {
    const { ids } = ctx.req.body;
    const del = await delTodo({ ids: ids });
    if (del === false) {
      return (ctx.body = {
        success: false,
      });
    } else {
      ctx.status = 200;
      return (ctx.body = {
        success: true,
      });
    }
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
}

/**
 *
 * @param ctx
 * @returns {Promise<void>}
 */

async function updateTodos(ctx) {
  try {
    const { data, ids } = ctx.req.body;

    const dataUpdated = await updateTodo({ data: data, ids: ids });
    ctx.status = 200;
    return (ctx.body = {
      success: true,
      data: dataUpdated,
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
}

module.exports = { getTodos, saveTodo, deleteTodo, updateTodos };
