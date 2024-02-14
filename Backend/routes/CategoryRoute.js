const express = require("express");

const category_router = express.Router();


const { createcategory, getcategory, getSinglecategory, updatecategory, deletecategory } = require("../controllers/CategoryController");

category_router.post("/", createcategory);
category_router.get("/", getcategory);
category_router.get("/:id", getSinglecategory);
category_router.patch("/:id", updatecategory);
category_router.delete("/:id", deletecategory);

module.exports = category_router;
