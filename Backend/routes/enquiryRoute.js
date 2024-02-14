const express = require("express");

const enq_router = express.Router();


const { createEnquiry, getEnquiry, getSingleEnquiry, updateEnquiry, deleteEnquiry } = require("../controllers/enquiryController");

enq_router.post("/", createEnquiry);
enq_router.get("/", getEnquiry);
enq_router.get("/:id", getSingleEnquiry);
enq_router.patch("/:id", updateEnquiry);
enq_router.delete("/:id", deleteEnquiry);

module.exports = enq_router;
