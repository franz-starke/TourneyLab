<p align="center">
  <img src="images/logo.svg" alt="TourneyLab Logo" width="120" height="120">
</p>

<h1 align="center" id="title">🏐 TourneyLab</h1>

<p align="center" id="description">
  An app for organizing all kinds of tournaments – primarily for volleyball, but easily adaptable for many other sports.
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/franz-starke/SE-Volleyball-Turnier-Belegprojekt?style=social" alt="GitHub Stars">
  <img src="https://img.shields.io/badge/python-3.11%2B-blue.svg" alt="Python Version">
  <img src="https://img.shields.io/badge/javascript-ES2022-yellow?logo=javascript" alt="JavaScript Version">
  <img src="https://img.shields.io/badge/vue-3.4.15-brightgreen?logo=vue.js&logoColor=white" alt="Vue Version">
  <img src="https://img.shields.io/github/license/franz-starke/SE-Volleyball-Turnier-Belegprojekt" alt="License">
  <img src="https://img.shields.io/github/last-commit/franz-starke/SE-Volleyball-Turnier-Belegprojekt" alt="Last Commit">
  <img src="https://img.shields.io/github/repo-size/franz-starke/SE-Volleyball-Turnier-Belegprojekt" alt="Repo Size">
  <img src="https://img.shields.io/github/issues/franz-starke/SE-Volleyball-Turnier-Belegprojekt" alt="Open Issues">
  <img src="https://img.shields.io/github/contributors/franz-starke/SE-Volleyball-Turnier-Belegprojekt" alt="Contributors">
</p>

## ✨ Overview

**TourneyLab** is a full-featured tournament manager built to simplify event setup, scheduling, and scoring. It’s ideal for **clubs**, **schools**, **sports events**, and **local competitions**. Designed with **volleyball** in mind, but adaptable to any team sport or competitive bracket structure.

## 🔧 Features

- 🏆 **Flexible Tournament Types**: Build for any bracket type tournament
- 📅 **Automatic Scheduling**: Optimized and automated match timelines
- 📊 **Live Rankings**: Real-time score and standings tracking
- 📝 **Result Logging**: Easily enter results and update brackets
- 🌐 **REST API**: FastAPI-powered endpoints for integration and automation
- 🎨 **Modern UI**: Built with Vue 3, Pinia, and Tailwind CSS
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile

## 🚀 Getting Started

You can run the project either locally (manual setup) or using Docker.

### 🐳 Option 1: Docker Compose
To run both frontend and backend in containers:

```bash
docker-compose up --build
```

Frontend runs at `http://localhost:8080` \
Backend runs at `http://localhost:8000`

### 🔧 Option 2: Local Setup
#### 1. Clone the repository

```bash
git clone https://github.com/franz-starke/TourneyLab.git
cd TourneyLab
```

#### 2. Set up the backend (Python/FastAPI)
```bash
cd src/backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn api:api
```

#### 3. Set up the frontend (Vue 3)
```bash
cd ../../src/frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173` \
Backend runs at `http://localhost:8000`

**!!! Before deploying replace the contents of src/frontend/public/imprint.txt with you imprint !!!**
**HTTPS is required for the app to be downloaded and the camera to work.**

## 📁 Project Structure
```
├── LICENSE
├── README.md
├── CONTRIBUTING.md
├── docker-compose.yaml
└── src
    ├── backend
    └── frontend
```

## 🛡 License

This project is licensed under the [MIT License](LICENSE).

## 🤝 Contributing

We welcome contributions!
Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to get started.

You can help by:
- 🔍 Report issues or bugs
- 💡 Suggest features
- 🛠 Submit pull requests
- 📝 Improve documentation

## 🙌 Acknowledgements
Thanks to all contributors, testers, and early users!
Feel free to star ⭐ the repo to support the project and spread the word.