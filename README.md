
# QuickCart - MERN Stack E-Commerce Application

A full-stack e-commerce application built with MongoDB, Express, React, and Node.js. Features include product browsing, shopping cart, category filtering, and cloud-based image storage using Cloudinary.

## 🚀 Features

- **Product Management**: Browse, search, and filter products
- **Shopping Cart**: Add items to cart with quantity management
- **Category Filtering**: Filter products by category
- **Cloud Image Storage**: Images stored on Cloudinary
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **MongoDB Database**: Persistent data storage
- **RESTful API**: Clean API endpoints for all operations

## 📁 Project Structure

```
quickcart/
├── backend/              # Node.js/Express backend
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── server.js        # Express server
│   └── package.json     # Backend dependencies
├── quickcart/           # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── contexts/    # React contexts
│   │   └── services/    # API services
│   └── package.json     # Frontend dependencies
└── README.md
```

## 🛠️ Tech Stack

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- Cloudinary for image storage
- Multer for file uploads

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Context API

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Cloudinary account (for image storage)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/quickcart
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**For MongoDB Atlas (Cloud):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/quickcart?retryWrites=true&w=majority
```

4. Seed the database (optional):
```bash
node seed.js
```

5. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd quickcart
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional, defaults to localhost):
```env
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🔧 Configuration

### MongoDB Setup

#### Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/quickcart`

#### MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string and add it to `.env`

### Cloudinary Setup

1. Create a free account at [Cloudinary](https://cloudinary.com/)
2. Go to Dashboard and copy:
   - Cloud Name
   - API Key
   - API Secret
3. Add these to your backend `.env` file

## 📡 API Endpoints

### Products
- `GET /api/products` - Get all products (with pagination, search, filter)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:slug` - Get single category
- `POST /api/categories` - Create new category

### Cart
- `GET /api/cart` - Get cart items
- `POST /api/cart/items` - Add item to cart
- `PUT /api/cart/items/:itemId` - Update cart item quantity
- `DELETE /api/cart/items/:itemId` - Remove item from cart
- `DELETE /api/cart` - Clear cart

### Upload
- `POST /api/upload/image` - Upload single image
- `POST /api/upload/images` - Upload multiple images
- `DELETE /api/upload/image/:publicId` - Delete image

## 🎯 Usage

1. Start both backend and frontend servers
2. Open `http://localhost:5173` in your browser
3. Browse products, add items to cart, and filter by category
4. Images are automatically uploaded to Cloudinary when products are created

## 🐛 Troubleshooting

### Backend Issues
- **MongoDB Connection Error**: Check if MongoDB is running and connection string is correct
- **Port Already in Use**: Change PORT in `.env` file
- **Cloudinary Upload Fails**: Verify Cloudinary credentials in `.env`

### Frontend Issues
- **API Connection Error**: Ensure backend is running on port 5000
- **CORS Errors**: Backend CORS is configured to allow all origins in development
- **Images Not Loading**: Check Cloudinary configuration

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/quickcart
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.

=======
# WP-project

