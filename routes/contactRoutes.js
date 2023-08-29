const express = require('express');
const router = express.Router();
const Contact = require("../models/Contact1"); // Use a relative path to the Contact model
const Validator = require('../Service/CustomerService');
const bodyParser = require('body-parser');
const { createConnection } = require('mysql2');
// add a body parser

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


// Route to get all connections
router.get("/connections/GetAllData", async (req, res) => {
  try {
    const createdConnection = await Contact.findAll({where:{accountStatus:1}}); // Use Contact instead of User
    res.status(200).json(createdConnection);
  } catch (error) {
    res.status(500).json({ error: "Unable to get connections" });
  }
});

// Route to create a connection
router.post("/connections/SaveContact", Validator.validateContactUs,async (req, res) => {
  const userData = req.body; // Assuming you're sending data in the request body

  try {
    const createdConnection = await Contact.create(userData); // Use Contact instead of User
    res.status(201).json(createdConnection);

  } catch (error) {
    
    res.status(500).json({ error: "Unable to create connection" });
    
  }
});


  
module.exports = router;
