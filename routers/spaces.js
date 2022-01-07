const { Router } = require("express");
const router = require("./auth");
const Space = require("../models").space;
const Story = require("../models").story;

const router = new Router();

//Get all spaces
//limit para un máximo de 10 pero el offset?
router.get("/", async (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const spaces = await Space.findAndountAll({
    limit,
    offset,
    backgroundColor: "#ffffff",
    color: "#000000",
    include: [Story],
    order: [[Story, "createdAt", "DESC"]],
  });
  res.status(200).send({ message: "ok", spaces });
});
