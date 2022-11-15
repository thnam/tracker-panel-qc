const fastify = require("fastify")({ logger: true });
const dotenv = require("dotenv");

dotenv.config();

fastify.register(require("@fastify/mongodb"), {
  forceClose: true,
  url: process.env.CONNECT_DB,
});

fastify.get("/", function (req, reply) {
  reply.send("Hello, world!");
});

fastify.register(require("./routes/panels"));

fastify.listen({port: 8081, host: '0.0.0.0'}, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
