// ticketRotes.js

const express = require("express");
const {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticketController");
const {
  validateTicketId,
  validateTicketData,
} = require("../middleware/ticketValidation");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// GET all tickets
router.get("/", getAllTickets);

// GET a single ticket
router.get("/:id", validateTicketId, getTicketById);
// router.get("/:id", getTicketById);

// POST a new ticket
router.post("/", validateTicketData, createTicket);
// router.post("/", createTicket);

// UPDATE a ticket
router.patch("/:id", validateTicketId, validateTicketData, updateTicket);
// router.patch("/:id", updateTicket);

// DELETE a ticket
router.delete("/:id", validateTicketId, deleteTicket);
// router.delete("/:id", deleteTicket);

module.exports = router;
