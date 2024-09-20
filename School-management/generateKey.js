const crypto = require('crypto');

// Generate a 32-byte encryption key
const encryptionKey = crypto.randomBytes(32).toString('hex');
console.log('Encryption Key:', encryptionKey);

// Generate a 16-byte initialization vector (IV)
const iv = crypto.randomBytes(16).toString('hex');
console.log('Initialization Vector (IV):', iv);
