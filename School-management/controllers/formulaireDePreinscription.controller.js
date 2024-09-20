const FormulaireDePreinscription = require('../models/FormulaireDePreinscription.model');

// Create FormulaireDePreinscription
exports.createFormulaireDePreinscription = async (req, res) => {
  try {
    const formulaire = new FormulaireDePreinscription(req.body);
    await formulaire.save();
    res.status(201).json({ message: 'Formulaire de préinscription created successfully', formulaire });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get All FormulairesDePreinscription
exports.getAllFormulairesDePreinscription = async (req, res) => {
  try {
    const formulaires = await FormulaireDePreinscription.find();
    res.status(200).json(formulaires);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Single FormulaireDePreinscription by ID
exports.getFormulaireDePreinscriptionById = async (req, res) => {
  try {
    const formulaire = await FormulaireDePreinscription.findById(req.params.id);
    if (!formulaire) {
      return res.status(404).json({ message: 'Formulaire de préinscription not found' });
    }
    res.status(200).json(formulaire);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update FormulaireDePreinscription
exports.updateFormulaireDePreinscription = async (req, res) => {
  try {
    const formulaire = await FormulaireDePreinscription.findById(req.params.id);
    if (!formulaire) {
      return res.status(404).json({ message: 'Formulaire de préinscription not found' });
    }

    Object.assign(formulaire, req.body);
    await formulaire.save();

    res.status(200).json({ message: 'Formulaire de préinscription updated successfully', formulaire });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete FormulaireDePreinscription
exports.deleteFormulaireDePreinscription = async (req, res) => {
  try {
    const formulaire = await FormulaireDePreinscription.findById(req.params.id);
    if (!formulaire) {
      return res.status(404).json({ message: 'Formulaire de préinscription not found' });
    }

    await FormulaireDePreinscription.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: 'Formulaire de préinscription deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
