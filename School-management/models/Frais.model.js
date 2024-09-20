const mongoose = require('mongoose');

const fraisSchema = new mongoose.Schema({
  niveau: {
    type: String,
    required: true,
  },
  anneeScolaire: {
    type: String,
    required: true,
  },
  montantMensuelle: {
    type: String,
    required: true,
  },
  fraisDossier: {
    type: String,
    required: true,
  },
  fraisReinscription: {
    type: String,
    required: true,
  },
  fraisPremiereInscription: {
    type: String,
    required: true,
  },
  serviceVieScolaire: {
    type: String,
    required: true,
  },
  panier: {
    type: String,
    required: true,
  },
  cantine: {
    type: String,
    required: true,
  },
  garderie: {
    type: String,
    required: true,
  },
  busScolaire: {
    type: String,
    required: true,
  },
  option: {
    type: String,
    required: true,
  },

});

const Frais = mongoose.model('Frais', fraisSchema);

module.exports = Frais;
