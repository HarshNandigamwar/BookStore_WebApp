# 📚 Bookstore Web App

A full-stack **Bookstore application** built with **React, Tailwind CSS, Firebase, and Cloudinary**.  
This project allows users to **sign up, log in (Email/Google), add books with images, view a responsive grid of books, and download book covers**.

🔗 **Live Demo**: [Bookstore App](https://bookstoreshriharshnandigamwar.netlify.app)

---

## 🚀 Features

- 🔑 **Authentication**

  - Email & Password
  - Google Login

- 📚 **Books Management**

  - Add new books (title, price, author, category, image)
  - View all uploaded books in a responsive grid
  - Download book images directly

- ☁️ **Cloud Integration**

  - Firebase Firestore for database
  - Cloudinary for free image hosting
  - Firebase Cloud Messaging for push notifications

- 🎨 **Modern UI/UX**
  - Built with **Tailwind CSS**
  - Fully responsive (mobile → desktop)

---

## 📂 Project Structure

```
bookstore/
┣━ 📂 public/ # Static assets (favicon, images, etc.)
┣━ 📂 src/ # Main application source code
┃ ┣━ 📂 auth/ # Authentication context & helpers
┃ ┃ ┗━ AuthContext.jsx
┃ ┣━ 📂 Components/ # Reusable UI components
┃ ┃ ┣━ Header.jsx
┃ ┃ ┣━ Footer.jsx
┃ ┃ ┣━ LoadingButton.jsx
┃ ┃ ┗━ ...
┃ ┣━ 📂 Pages/ # Application pages
┃ ┃ ┣━ LoginPage.jsx
┃ ┃ ┣━ SignUpPage.jsx
┃ ┃ ┣━ Home.jsx
┃ ┃ ┣━ AddBook.jsx
┃ ┃ ┗━ UserProfile.jsx
┃ ┣━ firebase.js # Firebase configuration
┃ ┣━ auth.js # Auth functions (Email/Google)
┃ ┗━ App.jsx # Main App component
┣━ .env # Environment variables (ignored in GitHub)
┣━ .gitignore # Ignored files & folders
┣━ package.json # Dependencies & scripts
┣━ vite.config.js # Vite configuration
┗━ README.md # Project documentation
```

## 👨‍💻 Author

**Shriharsh Nandigamwar**  
💻 Passionate about Development & AI  
🌐 Portfolio: [https://shriharshnandigamwar.vercel.app](https://shriharshnandigamwar.vercel.app)  
🔗 Connect with me:

- [LinkedIn](https://www.linkedin.com/in/shriharsh-nandigamwar-b106702b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
- [GitHub](https://github.com/HarshNandigamwar)
- [Instagram](https://www.instagram.com/harsh_nandigamwar?igsh=MW8yY3VzYTY0d245YQ==)
