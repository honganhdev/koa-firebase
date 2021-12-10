async function hello(ctx) {
  return (ctx.body = {
    message: "hello koa js",
  });
}

module.exports = {
  hello,
};
