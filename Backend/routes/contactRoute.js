const express = require("express");

const con_router = express.Router();


const { createcontact, getcontact, getSinglecontact, deletecontact } = require("../controllers/contactController");

con_router.post("/", createcontact);
con_router.get("/", getcontact);
con_router.get("/:id", getSinglecontact);

con_router.delete("/:id", deletecontact);

module.exports = con_router;
