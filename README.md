## 💻 Frontend: `frontend/README.md`

```markdown
# 💡 Lema Frontend (React)

This is the frontend UI for the **Lema** platform — a user-post management interface built using **React**, **Vite**, and **Tailwind CSS**.

---

## ✨ Features

- Fetch and display paginated users and their addresses
- View individual user posts
- Create and delete posts dynamically
- Fully responsive layout (mobile-first)
- Clean UI with reusable components
- Smooth API integration with error handling

---

## 🧰 Technologies Used

- **React** (with TypeScript)
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Axios**
- **React Query** (TanStack)
- **Jest + React Testing Library**
- **Vercel** (deployment)

---

## 🧪 Testing

Unit tests are written using:

- **Jest**
- **React Testing Library**

To run tests:

```bash
npm test
````

---

## 🔌 API Integration

All data is fetched from the backend hosted at:

```bash
https://lemaassesmentbackend.onrender.com
```

Endpoints used:

* `GET /users`
* `GET /users/:id/posts`
* `POST /users/:id/posts`
* `DELETE /posts/:postId`

---

## 🧑‍💻 Running Locally

1. **Clone the repo**

```bash
git clone https://github.com/kidmeeno/lemaFrontend.git
cd lemaFrontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the app**

```bash
npm run dev
```

Visit: `http://localhost:3000`

---

## 🌐 Deployment

Deployed on **Vercel**
👉 `https://lema-frontend-phi.vercel.app`

To deploy:

* Push to GitHub
* Connect repo to Vercel
* Set build command: `npm run build`
* Set output directory: `dist`

---

## 📌 Notes

* All API requests use `axios` + `react-query`
* Responsive grid for post cards (`min-[270px]`, max width handled via Tailwind)
* CORS handled in backend for deployment

---


## 👨‍💼 Author

**Bosah Arthur**
GitHub: [kidmeeno]([https://github.com/jogndoe](https://github.com/kidmeeno))
LinkedIn: [linkedin.com](https://www.linkedin.com/in/bosah-arthur-11316375/)

---

## 📄 License

MIT

```
