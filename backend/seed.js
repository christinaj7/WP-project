import mongoose from "mongoose";
import Product from "./models/Product.js";
import dotenv from "dotenv";

dotenv.config();

async function seedData() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("✅ Connected to MongoDB");

  await Product.deleteMany();
  console.log("🗑️ Cleared existing products");

  const products = [
    {
      name: "iPhone 14 Pro",
      category: "Electronics",
      price: 999,
      image: "https://via.placeholder.com/300x300",
      description: "Apple iPhone 14 Pro with A16 Bionic chip."
    },
    {
      name: "Samsung 4K TV",
      category: "Electronics",
      price: 599,
      image: "https://via.placeholder.com/300x300",
      description: "Ultra HD Smart TV with HDR support."
    },
    {
      name: "Nike Air Max",
      category: "Fashion",
      price: 149,
      image: "https://via.placeholder.com/300x300",
      description: "Comfortable running shoes from Nike."
    },
    {
      name: "Men's Leather Jacket",
      category: "Fashion",
      price: 199,
      image: "https://via.placeholder.com/300x300",
      description: "Premium genuine leather jacket."
    },
    {
      name: "Ceramic Flower Pot",
      category: "Home & Garden",
      price: 29,
      image: "https://via.placeholder.com/300x300",
      description: "Modern ceramic planter for indoor plants."
    },
    {
      name: "LED Lamp",
      category: "Home & Garden",
      price: 19,
      image: "https://via.placeholder.com/300x300",
      description: "Energy-efficient LED lamp."
    },
    {
      name: "Football",
      category: "Sports",
      price: 25,
      image: "https://via.placeholder.com/300x300",
      description: "Official size and weight football."
    },
    {
      name: "Badminton Racket",
      category: "Sports",
      price: 39,
      image: "https://via.placeholder.com/300x300",
      description: "Lightweight badminton racket for beginners."
    }
  ];

  await Product.insertMany(products);
  console.log("✅ Inserted products");
  process.exit();
}

seedData();

