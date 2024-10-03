import User from '../models/user.model.js';
import nodemailer from "nodemailer"

// Create a new user (only admin can create authors)
export const createUser = async (req, res) => {
  const { name, email, role } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }

    // Only allow admins to create authors
//     if (role === 'author' && req.user.role !== 'admin') {
//       return res.status(403).json({ message: 'Access Denied: Only admins can create authors.' });
//     }

    // Create the user
    const user = new User({
      name,
      email,
      role: role || 'reader', // Default role is 'reader'
    });

    await user.save();
    res.status(201).json({ message: 'User created successfully: ', user });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user', error: error.message });
    console.log(error)
  }
};

// Get all users (Admin use only)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-__v'); // Exclude version field
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error: error.message });
  }
};


// Apply for author function (send email to admin)
export const applyForAuthor = async (req, res) => {
  const { name, email, contact } = req.body;

  // Simple validation for required fields
  if (!name || !email || !contact) { 
    return res.status(400).json({ message: 'Please provide all required details: name, email, and contact.' });
  }

  try {
    // Configure the transporter using Gmail SMTP or any other service
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      port: 465,
      auth: {
        user: process.env.GMAIL_USER || 'candyshutter0@gmail.com', // Gmail address
        pass: process.env.GMAIL_PASS || 'your-app-password',        // App password
      },
    });

    // Setup email data
    let mailOptions = {
      from: `"${name}" <${email}>`, // Sender's name and email
      to: 'rajsha8617@gmail.com, manovmandal@gmail.com', // Replace with admin's email
      subject: 'Application for Author Role - innews', // Subject line
      text: `New author application from: \n\nName: ${name}\nEmail: ${email}\nContact: ${contact}`, // Plain text body
      html: `<h3>New Author Application</h3>
             <p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Contact:</b> ${contact}</p>
             <p>Please review and contact the applicant if needed.</p>`, // HTML body
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);

    // Send response back to client
    res.status(200).json({
      message: 'Application submitted successfully! Please wait for admin approval.',
      info,
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send application email. Please try again later.', error: error.message });
  }
};