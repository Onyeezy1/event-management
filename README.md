
# Event Management System

## Description
A full-stack web app for event creation, discovery, and ticket purchasing with Stripe integration.

## Tech Stack
- Frontend: HTML/CSS/JS (Netlify deployment)
- Backend: Node.js, Express, MongoDB (Render or AWS deployment)
- Authentication: JWT
- Payments: Stripe

## Deployment Instructions

### Frontend (Netlify):
1. Navigate to `frontend/`
2. Drag and drop to Netlify or use CLI to deploy static site

### Backend (Render/AWS):
1. Navigate to `backend/`
2. Create `.env` file with:
   ```
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   FRONTEND_URL=http://localhost
   ```
3. Run `npm install` and `node server.js`
4. Deploy using [Render](https://render.com) or AWS EC2

### HTTPS
Use Netlify/Render for automatic HTTPS, or configure SSL manually.

