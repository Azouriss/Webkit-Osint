# backend/app/core/config.py
from pydantic import BaseSettings

class Settings(BaseSettings):
    api_v1_prefix: str = "/api/v1"
    db_url: str = "postgresql+psycopg://postgres:postgres@db:5432/osint"
    class Config:
        env_file = ".env"

settings = Settings()
