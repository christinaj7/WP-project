# Quick Setup Guide - QuickCart

Follow these steps to get your QuickCart application running:

## 🚀 Quick Start

### Step 1: Setup MongoDB

**Option A: MongoDB Atlas (Cloud - Recommended for beginners)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free account
3. Create a new cluster (choose free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/...`)
6. Replace `<password>` with your database password

**Option B: Local MongoDB**
1. Download and install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/quickcart`

### Step 2: Setup Cloudinary (for image storage)

1. Go to [Cloudinary](https://cloudinary.com/users/register_free)
2. Sign up for a free account
3. Go to Dashboard
4. Copy:
   - Cloud Name
   - API Key
   - API Secret

### Step 3: Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
# Copy the example below and fill in your values
```

Create `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/quickcart
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/quickcart?retryWrites=true&w=majority

CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here

FRONTEND_URL=http://localhost:5173
```

```bash
# Seed the database with sample data (optional)
node seed.js

# Start the backend server
npm run dev
```

Backend should now be running on `http://localhost:5000` ✅

### Step 4: Frontend Setup

```bash
# Navigate to frontend folder
cd ../quickcart

# Install dependencies
npm install

# Create .env file (optional - defaults to localhost)
# Create .env file:
```

Create `quickcart/.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

```bash
# Start the frontend server
npm run dev
```

Frontend should now be running on `http://localhost:5173` ✅

### Step 5: Open Your Browser

Open [http://localhost:5173](http://localhost:5173) in your browser!

## 🐛 Troubleshooting

### Backend won't start
- ✅ Check MongoDB is running (if using local)
- ✅ Verify MongoDB connection string in `.env`
- ✅ Check if port 5000 is available
- ✅ Install dependencies: `npm install`

### Frontend can't connect to backend
- ✅ Make sure backend is running on port 5000
- ✅ Check browser console for CORS errors
- ✅ Verify `VITE_API_URL` in frontend `.env` matches backend URL

### Images not uploading
- ✅ Verify Cloudinary credentials in backend `.env`
- ✅ Check Cloudinary dashboard for uploaded images

### Database connection errors
- ✅ For MongoDB Atlas: Whitelist your IP address (0.0.0.0/0 for development)
- ✅ Verify username and password in connection string
- ✅ Check if cluster is running

## 📝 Test Your Setup

1. **Backend Health Check**: Visit `http://localhost:5000/api/health`
   - Should return: `{"status":"OK","message":"QuickCart API is running"}`

2. **Frontend**: Visit `http://localhost:5173`
   - Should show the QuickCart homepage

3. **Products**: Click "Products" in the navigation
   - Should load products from MongoDB

## 🎉 You're All Set!

Your QuickCart application is now running with:
- ✅ MongoDB backend for data storage
- ✅ Express API server
- ✅ React frontend
- ✅ Cloudinary for image storage
- ✅ Shopping cart functionality

Happy coding! 🚀

