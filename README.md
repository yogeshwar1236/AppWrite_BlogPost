# 📝 AppWrite Blog Post

A modern full-stack blogging platform built with **React**, **Vite**, and **Appwrite**. Users can securely authenticate, create and manage blog posts using a rich text editor, and explore content through a clean and responsive interface.

---

## 🌐 Live Demo

🔗 **Deployed Application:** `https://app-write-blog-post.vercel.app/`

---

## ✨ Features

### Authentication

* User Registration
* Secure Login and Logout
* Session-based Authentication using Appwrite
* Protected Routes for authenticated users

### Blog Management

* Create new blog posts
* Edit existing posts
* Delete blog posts
* View individual blog details
* View all published blogs

### Rich Content Editing

* TinyMCE Rich Text Editor integration
* Support for formatted blog content

### User Experience

* Responsive design
* Clean and intuitive interface
* Form validation using React Hook Form
* Fast development experience powered by Vite

---

## 🛠️ Tech Stack

### Frontend

* React 19
* Vite
* React Router DOM
* Redux Toolkit
* React Hook Form
* Tailwind CSS
* TinyMCE Editor

### Backend

* Appwrite Authentication
* Appwrite Database
* Appwrite Storage

### Deployment

* Vercel

---



---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js (v18 or above recommended)
* npm
* An Appwrite project configured with:

  * Authentication
  * Database
  * Storage Bucket

---

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

---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
```

You can use the provided `.env.example` file as a reference.

---

## ▶️ Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📂 Project Structure

```text
src/
├── appwrite/         # Appwrite service configuration
├── components/       # Reusable UI components
├── pages/            # Route-level components
├── store/            # Redux state management
├── assets/           # Static assets
├── App.jsx
└── main.jsx
```

---

## 🧠 Challenges Faced

During the development of this project, some notable challenges included:

* Integrating Appwrite authentication with React.
* Managing protected routes based on authentication state.
* Synchronizing Redux state with backend data.
* Handling rich text content using TinyMCE.
* Configuring Appwrite Storage for media uploads.
* Deploying and validating environment variables in production.

These challenges provided valuable experience in building real-world React applications.

---

## 📚 What I Learned

Through this project, I strengthened my understanding of:

* State management using Redux Toolkit.
* Authentication flows in modern web applications.
* Building CRUD applications with Appwrite.
* Form handling and validation with React Hook Form.
* Deploying frontend applications using Vercel.
* Structuring scalable React applications.

---

## 🔮 Future Improvements

Planned enhancements include:

* Search functionality for blog posts.
* Categories and tags.
* User profile pages.
* Comment system.
* Dark mode support.
* Pagination for blog listings.

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

If you'd like to contribute:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push to your fork.
5. Open a Pull Request.

---

## 👨‍💻 Author

**Yogeshwar**

GitHub: https://github.com/yogeshwar1236

---

## 📄 License

This project is licensed under the MIT License.

Feel free to use this project as a reference for learning and educational purposes.
