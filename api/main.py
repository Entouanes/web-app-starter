from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,  # Allow cookies or other credentials
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"]  # Allow all headers
)

@app.get("/")
async def root():
    return {"status": "ok"}