# ⚡ Quick Start Guide - QuickCart

## Prerequisites Checklist
- [ ] Node.js installed (v16+)
- [ ] MongoDB account (Atlas) or local MongoDB
- [ ] Cloudinary account (free tier)

## 🚀 5-Minute Setup

### 1. Backend Setup (2 minutes)

```bash
cd backend
npm install
```

Create `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/quickcart
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FRONTEND_URL=http://localhost:5173
```

```bash
# Seed database (optional)
node seed.js

# Start backend
npm run dev
```

✅ Backend running on `http://localhost:5000`

### 2. Frontend Setup (1 minute)

```bash
cd quickcart
npm install
```

```bash
# Start frontend
npm run dev
```

✅ Frontend running on `http://localhost:5173`

### 3. Open Browser
Visit: **http://localhost:5173**

## 🎯 API Endpoints

- **Health Check**: `GET http://localhost:5000/api/health`
- **Products**: `GET http://localhost:5000/api/products`
- **Categories**: `GET http://localhost:5000/api/categories`

## 📝 Need Help?

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed instructions.

