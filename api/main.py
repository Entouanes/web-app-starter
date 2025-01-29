from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,  # Allow cookies or other credentials
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"]  # Allow all headers
)

# Initialize the database connection and create the users table if it doesn't exist
def init_db():
    conn = sqlite3.connect('/app/database/users.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            email TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

init_db()

@app.get("/")
async def root():
    return {"status": "ok"}

@app.get("/users")
async def get_users():
    conn = sqlite3.connect('/app/database/users.db')
    cursor = conn.cursor()
    cursor.execute("SELECT id, username, email FROM users")
    users = cursor.fetchall()
    conn.close()
    return {"users": users}
