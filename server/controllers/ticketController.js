const Ticket = require("../models/ticketModel");
const mongoose = require("mongoose");

// Get all Tickets
const getAllTickets = async (req, res) => {
  const user_id = req.user._id;
  try {
    const tickets = await Ticket.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Ticket by ID
const getTicketById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ticket ID." });
  }

  try {
    const ticket = await Ticket.findById(id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found." });
    }
    res.status(200).json({ ticket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Create a new ticket
const createTicket = async (req, res) => {
  const { title, description, priority, status } = req.body;

  try {
    const user_id = req.user._id;
    const ticket = await Ticket.create({
      title,
      description,
      priority,
      status,
      user_id,
    });
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a ticket by ID
const deleteTicket = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid ticket ID." });
  }

  try {
    const ticket = await Ticket.findOneAndDelete({ _id: id });
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found." });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a ticket by ID
const updateTicket = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ticket ID." });
  }

  try {
    const ticket = await Ticket.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found." });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
};
