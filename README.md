# Image background remover web app
[![react](https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![tailwindcss](https://img.shields.io/badge/TAILWIND_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![flask](https://img.shields.io/badge/FLASK-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
![rembg](https://img.shields.io/badge/REMBG-FF5733?style=for-the-badge&logo=python&logoColor=white)
[![docker](https://img.shields.io/badge/DOCKER-blue?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.com/)
[![nginx](https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)

## Technologies Used

- **React** (Front-End)
- **Tailwind CSS** (Styling)
- **Flask** (Back-End)
- **rembg** (Background Removal Model)

## Prerequisites

- **Node.js** (v21.1.0 or higher)
- **npm** (v10.2.0 or higher)
- **Python** (v3.12 or higher)
- **pip** (Python package manager)

## Running the App

### A. With Docker and Docker Compose

1. Build the Docker images:

    ```bash
    docker-compose up
    ```
2. The app will be available at `http://localhost:3000` in your browser.

### B. Locally 
1. Navigate to the `frontend` folder and install dependencies:

    ```bash
    cd frontend
    npm install
    ```

2. Start the React development server:

    ```bash
    npm start
    ```

   The app will be available at `http://localhost:3000`.

#### 2. Backend (Flask)
1. Navigate to the `backend` folder and install Python dependencies:

    ```bash
    cd backend
    pip install -r requirements.txt
    ```

2. Run the Flask app:

    ```bash
    python app.py
    ```
