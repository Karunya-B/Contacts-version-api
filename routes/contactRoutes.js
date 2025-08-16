const express = require('express');
const router = express.Router();
const { getContacts
, createContact, GetContact, UpdateContact, DeleteContact   
 } = require('../controllers/contactController');
const { validate } = require('../models/userModel');
const validateTokenHandler = require('../middleware/validateTokenHandler');
router.use(validateTokenHandler);
router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(GetContact).put(UpdateContact).delete(DeleteContact);

module.exports = router; 
