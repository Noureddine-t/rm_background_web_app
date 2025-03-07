# Image background remover web app
[![react](https://img.shields.io/badge/REACT_JS-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![tailwindcss](https://img.shields.io/badge/TAILWIND_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![flask](https://img.shields.io/badge/FLASK-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![docker](https://img.shields.io/badge/DOCKER-blue?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.com/)
![rembg](https://img.shields.io/badge/REMBG-FF5733?style=for-the-badge&logo=python&logoColor=white)
[![nginx](https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)

## Prerequisites

- **Node.js** (v21.1.0 or higher)
- **npm** (v10.2.0 or higher)
- **Python** (v3.12 or higher)

## Running the App

### A. With Docker and Docker Compose

Build and run the app using Docker Compose:

```bash
docker-compose up
```
> [!NOTE]
> Once done visite `http://localhost:3000` on your browser.
### B. Locally

#### Backend
1. Navigate to the `Backend` folder to install Python dependencies:

    ```bash
    pip install -r requirements.txt
    ```

2. Run the Flask app:

    ```bash
    python app.py
    ```
   
#### Frontend

1. Navigate to the `Frontend` folder to install dependencies:

   ```bash
   npm install
    ```
   
2. Start the React development server:

    ```bash
    npm start
    ```
   
> [!NOTE]
> The app will be available at `http://localhost:3000`
