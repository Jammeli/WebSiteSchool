const Frais = require('../models/Frais.model');

// Create Frais
exports.createFrais = async (req, res) => {
  try {
    const frais = new Frais(req.body);
    await frais.save();
    res.status(201).json({ message: 'Frais created successfully', frais });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get All Frais
exports.getAllFrais = async (req, res) => {
  try {
    const frais = await Frais.find();
    res.status(200).json(frais);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Single Frais by ID
exports.getFraisById = async (req, res) => {
  try {
    const frais = await Frais.findById(req.params.id);
    if (!frais) {
      return res.status(404).json({ message: 'Frais not found' });
    }
    res.status(200).json(frais);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Frais
exports.updateFrais = async (req, res) => {
  try {
    const frais = await Frais.findById(req.params.id);
    if (!frais) {
      return res.status(404).json({ message: 'Frais not found' });
    }

    Object.assign(frais, req.body);
    await frais.save();

    res.status(200).json({ message: 'Frais updated successfully', frais });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Frais
exports.deleteFrais = async (req, res) => {
  try {
    const frais = await Frais.findById(req.params.id);
    if (!frais) {
      return res.status(404).json({ message: 'Frais not found' });
    }

    await Frais.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: 'Frais deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
