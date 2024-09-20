const mongoose = require("mongoose");

const formulaireDePreinscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  nomEleve: {
    type: String,
    required: true,
  },
  prenomEleve: {
    type: String,
    required: true,
  },
  dateNaissanceEleve: {
    type: Date,
    required: true,
  },
  nationaliteEleve: {
    type: String,
    required: true,
  },
  sexeEleve: {
    type: String,
    required: true,
  },
  adresseResidence: {
    type: String,
    required: true,
  },
  sante: {
    eprouveDifficultes: {
      type: Boolean,
      required: true,
    },
    maladieChronique: {
      type: Boolean,
      required: true,
    },
    allergieAlimentaire: {
      type: Boolean,
      required: true,
    },
  },
  fratrieECT: {
    type: String,
    required: false,
  },
  ecoleActuelle: {
    type: String,
    required: false,
  },
  niveauScolaire: {
    type: String,
    required: true,
  },
  situationFamiliale: {
    type: String,
    required: true,
  },
  premierResponsableLegal: {
    nomPrenom: {
      type: String,
      required: true,
    },
    nationalite: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    telephone1: {
      type: String,
      required: true,
    },
    email1: {
      type: String,
      required: true,
    },
  },
  deuxiemeResponsableLegal: {
    nomPrenom: {
      type: String,
      required: true,
    },
    nationalite: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    telephone2: {
      type: String,
      required: true,
    },
    email2: {
      type: String,
      required: false,
    },
  },
  services: {
    panier: {
      type: Boolean,
      required: false,
    },
    cantine: {
      type: Boolean,
      required: false,
    },
    garderie: {
      type: Boolean,
      required: false,
    },
    busScolaire: {
      type: Boolean,
      required: false,
    },
  },
  engagements: {
    exactitudeRenseignements: {
      type: Boolean,
      required: true,
    },
    connaissanceConditions: {
      type: Boolean,
      required: true,
    },
    connaissanceReglement: {
      type: Boolean,
      required: true,
    },
    
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

const FormulaireDePreinscription = mongoose.model(
  "FormulaireDePreinscription",
  formulaireDePreinscriptionSchema
);

module.exports = FormulaireDePreinscription;
