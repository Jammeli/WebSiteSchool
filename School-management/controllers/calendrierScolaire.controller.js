const CalendrierScolaire = require('../models/CalendrierScolaire.model');
const cloudinary = require('../cloudinary');

// Helper function to upload image to Cloudinary using a buffer
const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'emplois du temps' },
      (error, result) => {
        if (error) {
          reject(new Error('Cloudinary upload failed'));
        } else {
          resolve(result);
        }
      }
    );
    stream.end(fileBuffer);
  });
};

// Create CalendrierScolaire
exports.createCalendrierScolaire = async (req, res) => {
  try {
    // Check if an emploiDeTemps already exists
    const existingCalendrier = await CalendrierScolaire.findOne();
    if (existingCalendrier) {
      return res.status(400).json({ message: 'Only one emploiDeTemps is allowed' });
    }

    const { anneeScolaire, niveau } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Emploi de temps image is required' });
    }

    // Upload image to Cloudinary directly from memory
    const result = await uploadToCloudinary(req.file.buffer);

    const calendrierScolaire = new CalendrierScolaire({
      anneeScolaire,
      niveau,
      emploiDeTemps: result.secure_url,
    });

    await calendrierScolaire.save();
    res.status(201).json({ message: 'Calendrier scolaire created successfully', calendrierScolaire });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Get All CalendrierScolaire
exports.getAllCalendrierScolaire = async (req, res) => {
  try {
    const calendrierScolaire = await CalendrierScolaire.find();
    res.status(200).json(calendrierScolaire);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Single CalendrierScolaire by ID
exports.getCalendrierScolaireById = async (req, res) => {
  try {
    const calendrierScolaire = await CalendrierScolaire.findById(req.params.id);
    if (!calendrierScolaire) {
      return res.status(404).json({ message: 'Calendrier scolaire not found' });
    }
    res.status(200).json(calendrierScolaire);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update CalendrierScolaire
exports.updateCalendrierScolaire = async (req, res) => {
  try {
    const { anneeScolaire, niveau } = req.body;
    const calendrierScolaire = await CalendrierScolaire.findOne(); // Find the existing emploiDeTemps
    if (!calendrierScolaire) {
      return res.status(404).json({ message: 'Calendrier scolaire not found' });
    }

    if (req.file) {
      // If a new image is uploaded, update the image on Cloudinary directly from memory
      await cloudinary.uploader.destroy(calendrierScolaire.emploiDeTemps);
      const result = await uploadToCloudinary(req.file.buffer);
      calendrierScolaire.emploiDeTemps = result.secure_url;
    }
    
    calendrierScolaire.anneeScolaire = anneeScolaire || calendrierScolaire.anneeScolaire;
    calendrierScolaire.niveau = niveau || calendrierScolaire.niveau;

    await calendrierScolaire.save();
    res.status(200).json({ message: 'Calendrier scolaire updated successfully', calendrierScolaire });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Delete CalendrierScolaire
exports.deleteCalendrierScolaire = async (req, res) => {
  try {
    const calendrierScolaire = await CalendrierScolaire.findById(req.params.id);
    if (!calendrierScolaire) {
      return res.status(404).json({ message: 'Calendrier scolaire not found' });
    }

    // Destroy the image on Cloudinary
    await cloudinary.uploader.destroy(calendrierScolaire.emploiDeTemps);

    // Delete the calendrier scolaire item from the database
    await CalendrierScolaire.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: 'Calendrier scolaire deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
