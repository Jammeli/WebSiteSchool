const express = require("express");
const {
  createCalendrierScolaire,
  getAllCalendrierScolaire,
  getCalendrierScolaireById,
  updateCalendrierScolaire,
  deleteCalendrierScolaire,
} = require("../controllers/calendrierScolaire.controller");
const auth = require("../middleware/authentification");
const upload = require("../middleware/upload"); // Assuming you have the multer configuration

const router = express.Router();

// Routes
router.post("/", upload.single("emploiDeTemps"), createCalendrierScolaire);
router.get("/", getAllCalendrierScolaire);
router.get("/:id", getCalendrierScolaireById);
router.put("/:id", upload.single("emploiDeTemps"), updateCalendrierScolaire);
router.delete("/:id", deleteCalendrierScolaire);

module.exports = router;
