# MongoDB Setup Guide

Your application needs MongoDB to store products. Here are two options:

## Option 1: MongoDB Atlas (Cloud - RECOMMENDED) ⭐

This is the easiest option - no installation needed!

### Steps:
1. **Sign up for free**: Go to https://www.mongodb.com/cloud/atlas/register
2. **Create a cluster**: 
   - Choose "Free" tier (M0)
   - Select a cloud provider and region
   - Click "Create Cluster" (takes 3-5 minutes)
3. **Create Database User**:
   - Go to "Database Access" → "Add New Database User"
   - Username: `quickcart` (or your choice)
   - Password: Create a strong password (SAVE THIS!)
   - Database User Privileges: "Atlas admin" or "Read and write to any database"
   - Click "Add User"
4. **Whitelist IP Address**:
   - Go to "Network Access" → "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0) for development
   - Click "Confirm"
5. **Get Connection String**:
   - Go to "Database" → Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
   - Replace `<password>` with your database password
   - Add database name: `quickcart`

6. **Update .env file**:
   ```
   MONGODB_URI=mongodb+srv://quickcart:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/quickcart?retryWrites=true&w=majority
   ```

## Option 2: Local MongoDB

### Windows:
1. **Download**: Go to https://www.mongodb.com/try/download/community
2. **Install**: Run the installer
3. **Start MongoDB**:
   - MongoDB should start automatically as a service
   - Or run: `net start MongoDB` in Command Prompt (as Admin)
4. **Use default connection**:
   ```
   MONGODB_URI=mongodb://localhost:27017/quickcart
   ```

### Verify Connection:
After setting up MongoDB, restart your backend server and run:
```bash
cd backend
node seed.js
```

You should see:
```
✅ Connected to MongoDB
🗑️  Cleared existing data
✅ Inserted 20 categories
✅ Inserted 20 products
✅ Database seeded successfully!
```

## Quick Test

Once MongoDB is connected, you can test by visiting:
- Backend: http://localhost:5000/api/products
- Frontend: http://localhost:5173

Products should now appear on your website!

