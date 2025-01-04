const express = require("express");
const app = express;
const AboutUs = require("../models/AboutUs");
const router = express.Router();


router.post("/", async (req, res) => {
  const { title, content } = req.body;
  try {
    const newEntry = new AboutUs({ title, content });
    const savedEntry = await newEntry.save();
    res.json(savedEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Read all About Us entries
router.get("/", async (req, res) => {
  try {
    const entries = await AboutUs.find();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read a single About Us entry
router.get("/:id", async (req, res) => {
  try {
    const entry = await AboutUs.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }
    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Update an About Us entry
router.put("/:id", async (req, res) => {
  const { title, content } = req.body;
  try {
    const updatedEntry = await AboutUs.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedEntry) {
      return res.status(404).json({ message: "Entry not found" });
    }
    res.json(updatedEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Delete an About Us entry
router.delete("/:id", async (req, res) => {
  try {
    const deletedEntry = await AboutUs.findByIdAndDelete(req.params.id);
    if (!deletedEntry) {
      return res.status(404).json({ message: "Entry not found" });
    }
    res.json({ message: "Entry deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;