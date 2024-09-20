const express = require('express');
const { createFormulaireDePreinscription, getAllFormulairesDePreinscription, getFormulaireDePreinscriptionById, updateFormulaireDePreinscription, deleteFormulaireDePreinscription } = require('../controllers/formulaireDePreinscription.controller');

const router = express.Router();

// Routes
router.post('/', createFormulaireDePreinscription);
router.get('/', getAllFormulairesDePreinscription);
router.get('/:id', getFormulaireDePreinscriptionById);
router.put('/:id', updateFormulaireDePreinscription);
router.delete('/:id', deleteFormulaireDePreinscription);

module.exports = router;
