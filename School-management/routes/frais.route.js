const express = require("express");
const {
  createFrais,
  getAllFrais,
  getFraisById,
  updateFrais,
  deleteFrais,
} = require("../controllers/frais.controller");


const router = express.Router();

// Routes
router.post("/", createFrais);
router.get("/", getAllFrais);
router.get("/:id", getFraisById);
router.put("/:id", updateFrais);
router.delete("/:id", deleteFrais);

module.exports = router;
