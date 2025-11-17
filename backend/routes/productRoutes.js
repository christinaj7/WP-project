import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET all + filter + search
router.get("/", async (req, res) => {
  const { category, search } = req.query;
  let query = {};
  if (category) query.category = category;
  if (search) query.name = { $regex: search, $options: "i" };
  const products = await Product.find(query);
  res.json(products);
});

// GET by ID
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// ADD product
router.post("/", async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.json(newProduct);
});

// UPDATE product
router.put("/:id", async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// DELETE product
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

export default router;

