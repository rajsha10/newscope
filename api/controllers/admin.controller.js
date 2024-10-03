import User from '../models/user.model.js';
import bcrypt from 'bcrypt'; // Import bcrypt

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await User.findOne({ email });

    // Check if the user exists
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the user is an admin
    if (admin.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied: Not an admin' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = generateToken(admin._id);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};

// Function to generate a JWT token
const generateToken = (id) => {
  const jwt = require('jsonwebtoken');
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
