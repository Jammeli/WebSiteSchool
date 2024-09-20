const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin.model");
const nodemailer = require("nodemailer");

// Function to generate a JWT token

// Admin login function
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find admin by email
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Decrypt and compare the password
    const decryptedPassword = admin.decryptPassword();
    if (decryptedPassword !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a token
    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      token: "Bearer " + token,
      message: "Login successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Function to create a new admin
exports.createAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Check if the admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // Create a new admin and encrypt the password
    const admin = new Admin({ email });
    admin.password = admin.encryptPassword(password);

    // Save the admin to the database
    await admin.save();

    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Forgot Password function
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Find admin by email
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res
        .status(404)
        .json({ message: "No admin found with that email" });
    }

    // Decrypt the password
    const decryptedPassword = admin.decryptPassword();

    // Send an email with the decrypted password
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      to: admin.email,
      from: process.env.EMAIL_USER,
      subject: "Your Password",
      text: `Here is your password: ${decryptedPassword}\n\nPlease consider changing your password if you did not request this.`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Password has been sent to your email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Reset Password function
exports.resetPassword = async (req, res) => {
  const { resetToken } = req.params;
  const { password } = req.body;

  try {
    // Hash the received reset token
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // Find admin by reset token and ensure token is still valid
    const admin = await Admin.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!admin) {
      return res
        .status(400)
        .json({ message: "Token is invalid or has expired" });
    }

    // Encrypt the new password and save it
    admin.password = admin.encryptPassword(password);
    admin.resetPasswordToken = undefined;
    admin.resetPasswordExpires = undefined;

    await admin.save();

    res.status(200).json({ message: "Password has been reset" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
