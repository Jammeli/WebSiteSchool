const mongoose = require('mongoose');
const crypto = require('crypto');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

// Method to encrypt the password
adminSchema.methods.encryptPassword = function (password) {
  const encryptionKey = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
  const iv = Buffer.from(process.env.IV, 'hex');
  const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);
  let encrypted = cipher.update(password, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

// Method to decrypt the password
adminSchema.methods.decryptPassword = function () {
  const encryptionKey = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
  const iv = Buffer.from(process.env.IV, 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', encryptionKey, iv);
  let decrypted = decipher.update(this.password, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
