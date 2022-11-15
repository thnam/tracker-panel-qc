const ObjectID = require("mongodb").ObjectID;

async function listPanels(req, reply) {
  const panels = this.mongo.db.collection("panels");
  const result = await panels.find({}).toArray();
  console.log(result);
  reply.send(result);
}

async function addPanel(req, reply) {
  const panels = this.mongo.db.collection("panels");
  const { id, errors } = req.body;
  const data = { id, errors };
  const result = await panels.insertOne(data);
  reply.code(201).send(result.ops[0]);
}

module.exports = { listPanels, addPanel };
