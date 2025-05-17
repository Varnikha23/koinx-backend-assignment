## ✅ `worker-server/README.md`

```markdown
# Worker Server

This is the background worker for the KoinX Backend Assignment. It listens to NATS messages from the API server, fetches cryptocurrency data from the CoinGecko API, and stores it in MongoDB.

---

## 📦 Tech Stack

- Node.js
- Axios for HTTP requests
- MongoDB (via Mongoose)
- NATS for inter-service communication
- CoinGecko API
- Dotenv

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/koinx-backend-assignment.git
cd koinx-backend-assignment/worker-server
npm install
touch .env
npm run start

