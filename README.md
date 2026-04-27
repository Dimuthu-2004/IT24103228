

# 🧠 Project Structure

```
mern-item-manager/
 ├── backend/
 └── frontend/
```

---

# ⚙️ 1. Backend Setup (Local)

```bash
cd backend
npm install
```

## 📄 Create `.env`

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## ▶️ Run backend

```bash
npm run dev
```

## ✅ Test backend

Open:

```
http://localhost:5000/api/items
```

---

# 💻 2. Frontend Setup (Local)

```bash
cd frontend
npm install
```

## 📄 Create `.env`

```
VITE_API_URL=http://localhost:5000/api
```

## ▶️ Run frontend

```bash
npm run dev
```

## ✅ Open app

```
http://localhost:5173
```

---

# 🌐 3. Push to GitHub

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/your-username/repo.git
git push -u origin main
```

---

# 🚀 4. Deploy Backend (Railway)

## Steps

* Create new project in Railway
* Connect GitHub repo
* Set root directory → `backend`

## 📄 Environment Variable

```
MONGO_URI=your_mongodb_connection_string
```

## ✅ After deploy

Copy your backend URL:

```
https://your-project.up.railway.app
```

---

# 🌐 5. Deploy Frontend (Vercel)

## Steps

* Import GitHub repo
* Set root directory → `frontend`

## 📄 Environment Variable

```
VITE_API_URL=https://your-railway-url.up.railway.app/api
```

## 🔁 Important

After adding env → **Redeploy project**

---

# ⚠️ IMPORTANT RULES

❌ Never use:

```
http://localhost
```

✅ Always use:

```
https://your-railway-url/api
```

---

# 🔁 6. Update & Redeploy

```bash
git add .
git commit -m "update"
git push
```

---

# 🧪 7. Debug Checklist

## Check API URL

```js
console.log(import.meta.env.VITE_API_URL);
```

## Test backend

```
https://your-railway-url/api/items
```

---

# ⚠️ Common Errors

## ❌ CORS Error

```
No Access-Control-Allow-Origin
```

👉 Fix in backend (server.js) using CORS middleware

---

## ❌ Wrong Endpoint

```
/items ❌
/api/items ✅
```

---

## ❌ Env Not Working

👉 Redeploy Vercel

---

## ❌ localhost in Production

💀 Will NOT work on Vercel

---

# 📌 Submission Requirements

Include:

* Student Name & ID
* GitHub Repository Link
* Screenshots (local & updated system)
* Frontend Live URL
* Backend Live URL
* Deployment notes

---

# 🧠 Final Tips

* Always test backend first
* Then frontend
* If frontend not working → check API URL
* If blocked → CORS issue
* Keep everything simple

---

## 🚀 Done!

This covers full setup + deployment + debugging for your lab test.

