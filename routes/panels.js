const { listPanels, getPanel, updatePanel } = require("../controllers/panels");

async function routes(fastify, options) {
  fastify.get("/panels", listPanels);
  fastify.get("/panels/:id", getPanel);
  fastify.put("/panels/:id", updatePanel);
}
module.exports = routes;
