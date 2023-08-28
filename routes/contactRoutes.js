const express = require('express');
const router = express.Router();
const Contact = require("../models/Contact1"); // Use a relative path to the Contact model
const { validateContact, handleValidationErrors } = require('../Validation/contactValidation');
const bodyParser = require('body-parser');
const { createConnection } = require('mysql2');
// add a body parser

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


// Route to get all connections
router.get("/connections", async (req, res) => {
  try {
    const createdConnection = await Contact.findAll(); // Use Contact instead of User
    res.status(200).json(createdConnection);
  } catch (error) {
    res.status(500).json({ error: "Unable to get connections" });
  }
});

// Route to create a connection
router.post("/connections", validateContact, handleValidationErrors,async (req, res) => {
  const userData = req.body; // Assuming you're sending data in the request body

  try {
    const createdConnection = await Contact.create(userData); // Use Contact instead of User
    res.status(200).json(createdConnection);

  } catch (error) {
    
    res.status(500).json({ error: "Unable to create connection" });
    
  }
});
// Soft Delete a contact
router.delete("/connections/:id", async (req, res) => {
  try {
    
    const contact = await Contact.findByPk(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    // Soft delete the contact
    await contact.destroy();
    

    res.json({ message: "Contact soft deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error soft deleting contact" });
  }
});
// Restore a soft-deleted contact
router.put("/connections/:id/restore", async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id, { paranoid: false });

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    // Restore the contact
    await contact.restore();

    res.json({ message: "Contact restored" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error restoring contact" });
  }
});


module.exports = router;
