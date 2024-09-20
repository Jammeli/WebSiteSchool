const express = require('express');
const { loginAdmin, createAdmin, forgotPassword, resetPassword } = require('../controllers/authentification.controller');
const auth = require('../middleware/authentification');

const router = express.Router();

// Public route: Admin login
router.post('/login', loginAdmin);

// POST route for creating an admin
router.post('/register', createAdmin);

// POST route for forgot password
router.post('/forgot-password', forgotPassword);

// POST route for resetting password
router.post('/reset-password/:resetToken', resetPassword);

// Protected route: Only accessible to authenticated admins
router.get('/protected-route', auth, (req, res) => {
  res.status(200).json({ message: 'You are authorized', admin: req.admin });
});

module.exports = router;
