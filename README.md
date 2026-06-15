# 📝 AppWrite Blog Post

A full-stack blog application built using **React**, **Vite**, and **Appwrite**. Users can create, edit, publish, and manage blog posts through an intuitive interface while leveraging Appwrite for backend services such as authentication, database management, and file storage.

## 🚀 Features

* 🔐 User Authentication (Sign Up / Login / Logout)
* ✍️ Create new blog posts
* 📝 Edit existing posts
* 🗑️ Delete blog posts
* 📚 View all published articles
* 👤 Manage posts created by the logged-in user
* ☁️ Backend powered by Appwrite
* ⚡ Fast frontend development with Vite
* 📱 Responsive user interface

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* React Router DOM
* Redux Toolkit *(if used)*

### Backend

* Appwrite Authentication
* Appwrite Database
* Appwrite Storage

## 📂 Project Structure

```
src/
├── components/
├── pages/
├── appwrite/
├── store/
├── assets/
├── App.jsx
└── main.jsx
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/yogeshwar1236/AppWrite_BlogPost.git
cd AppWrite_BlogPost
```

### Install dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

### Run the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

## 🏗️ Building for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📸 Screenshots

Add screenshots of:

* Home Page
* Login/Register Page
* Create Post Page
* Post Details Page

## 🔮 Future Improvements

* Search functionality
* Rich text editor
* Comments section
* User profiles
* Post categories and tags
* Dark mode support
* Pagination

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

## 👨‍💻 Author

**Yogeshwar**

GitHub: https://github.com/yogeshwar1236

## 📄 License

This project is licensed under the MIT License.
