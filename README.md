

# 🧠 1. Create Project Structure

```bash
mkdir mern-item-manager
cd mern-item-manager
mkdir backend
mkdir frontend
```

---

# ⚙️ 2. Backend Setup

```bash
cd backend
npm init -y
npm install express mongoose cors dotenv
npm install nodemon --save-dev
```

---

## 📄 Create `.env`

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
```

---

## ▶️ Run Backend

```bash
npm run dev
```

👉 Test in browser:

```
http://localhost:5001/api/items
```

---

# 💻 3. Frontend Setup

```bash
cd ..
cd frontend
npm create vite@latest
npm install
```

---

## 📄 Create `.env`

```env
VITE_API_URL=http://localhost:5001/api
```

---

## ▶️ Run Frontend

```bash
npm run dev
```

👉 Open:

```
http://localhost:5173
```

---

# ✏️ 4. Make Required Changes

* Update backend & frontend as required (e.g., new field)
* Test everything locally

---

# 🌐 5. Push to GitHub

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/your-username/repo.git
git push -u origin main
```

---

# 🚀 6. Deploy Backend (Railway)

Use Railway

## Steps

* Create new project
* Connect GitHub repo
* Set root directory → `backend`

## 📄 Add Environment Variable

```
MONGO_URI=your_mongodb_connection_string
```

---

## ✅ After Deploy

Copy backend URL:

```
https://your-project.up.railway.app
```

---

# 🌐 7. Deploy Frontend (Vercel)

Use Vercel

## Steps

* Import GitHub repo
* Set root directory → `frontend`

---

## 📄 Environment Variable

```
VITE_API_URL=https://your-railway-url.up.railway.app/api
```

---

## 🔁 IMPORTANT

After adding env → **Redeploy project**

---

# ⚠️ Important Rules

❌ Do NOT use:

```
http://localhost
```

✅ Use:

```
https://your-railway-url/api
```

---

# 🔁 8. Update & Redeploy

```bash
git add .
git commit -m "update"
git push
```

---

# 🧪 9. Debug Checklist

## Test backend

```
https://your-railway-url/api/items
```

## Check API URL

```js
console.log(import.meta.env.VITE_API_URL);
```

---

# ⚠️ Common Errors

## ❌ CORS Error

👉 Fix in backend (server.js using cors)

---

## ❌ Wrong endpoint

```
/items ❌
/api/items ✅
```

---

## ❌ Env not working

👉 Redeploy Vercel

---

## ❌ localhost in production

💀 Will NOT work

---

# 📌 Submission Requirements

Include:

* Student Name & ID
* GitHub Repository Link
* Screenshots (local & updated system)
* Frontend URL
* Backend URL
* Deployment notes

---

# 🧠 Final Tips

* Test backend first
* Then frontend
* If not working → check API URL
* If blocked → CORS

---

## 🚀 Done

Simple flow:
**Setup → Test → Push → Deploy → Connect → Done**
