# backend/app/main.py
from fastapi import FastAPI, status

app = FastAPI(title="OSINT-DevSecOps API", version="0.1.0")

@app.get("/", status_code=status.HTTP_200_OK, tags=["health"])
def healthcheck() -> dict[str, str]:
    return {"status": "ok"}
