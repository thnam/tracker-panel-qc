const { listPanels, addPanel } = require("../controllers/panels");

async function routes(fastify, options) {
  fastify.get("/panels", listPanels);
  fastify.post("/panels", addPanel);
}
module.exports = routes;
