
# Operations Documentation

## Objective

This documentation is intended to assist administrators with the **setup, configuration, and maintenance** of the **TourneyLab** system.

## 1. System Requirements

### Minimum Server Hardware Requirements

* **CPU:** 1 GHz, 64-bit (recommended: 2+ cores)
* **RAM:** at least 128 MB (recommended: 512 MB+)
* **Disk Space:** at least 2 GB available
* **Network:** Internet connection required for installation and operation

### Software Requirements

* **Operating System (Server):** Linux Kernel 5.0 or newer
* **Backend:**
  * Python 3.12+
  * Uvicorn
  
* **Frontend:**
  * Node.js version 24.0.0
  
* **Container Support (optional):**
  * Docker Engine v20+
  * Docker Compose v2+

### Minimum Client Hardware Requirements
  
* Chrome 61+
* Firefox 3.5+
* Safari 3.1+

## **2. System Setup**

### **System Components**

* **Frontend:** Vue 3, Tailwindcss, HTML, CSS, JS
* **Backend:** Python, FastAPI, SQLite

### **Directory Structure**

```
├── LICENSE
├── README.md
├── CONTRIBUTING.md
├── docker-compose.yaml
└── src
    ├── backend
    └── frontend
```

### **Installation Options**

#### **A) Using Docker**

```bash
git clone https://github.com/franz-starke/TourneyLab.git
cd TourneyLab
docker-compose up --build
```

* Frontend available at: `http://localhost:8080`
* Backend available at: `http://localhost:8000`

#### **B) Compile from Source**

##### Backend (Python)

```bash
cd src/backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn api:api
```

##### Frontend (Vue 3)

```bash
cd src/frontend
npm install
npm run dev
```

## **3. System Configuration**

**https is needed** to for users to access the camera inside the pwa and website, as well as pwa export 

### **Network & Ports**

* **Frontend (dev):** Port 5173
* **Frontend (Docker):** Port 8080
* **Backend (API):** Port 8000

### **Configuration via `.env` File (optional)**

If used:

```
API_URL=http://localhost:8000
```

**!!!Before deploying replace the contents of src/frontend/public/imprint.txt with you imprint!!!**

## **4. System Maintenance**

### **FAQ**

**Always check the console first**, error and why they occurred may be logged.

| **Problem**           | **Solution**                                               |
| --------------------- | ---------------------------------------------------------- |
| Web app does not load | Is the server running on port 5173 (dev) or 8080 (Docker)? Also check if the backend is running because the frontend depends on it. |
| API does not respond  | Is `uvicorn` active and running on port 8000?              |
| `npm run dev` fails   | Check Node.js version (24.0.0), `node -v`                  |

### **Error Diagnosis**

* **Backend logs:** automatically shown via `uvicorn`, terminal output and are stored in the backends log directory.
* **Frontend logs:** browser console (F12) and terminal output of `npm run dev`
* **Docker logs:** are inside the container console or:

```bash
docker-compose logs
```

### **Data Backup**

* **Database files:** 
Every tournament is stored in a SQLite file with the tournament id as filename. 
* Backup:

```bash
cp src/backend/data/databases/* backups/
```

## **5. Further Reading**

* [FastAPI Documentation](https://fastapi.tiangolo.com/)
* [Vue 3 Documentation](https://vuejs.org/)
* [Docker Compose Documentation](https://docs.docker.com/compose/)
* [SQLite Backup Guide](https://www.sqlite.org/backup.html)

## **6. Further Questions**
For further questions regarding maintenance, installation or further development contact: franz.starke@stud.htw-dresden.de
