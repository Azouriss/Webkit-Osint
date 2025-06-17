# backend/Dockerfile
FROM python:3.12-alpine
WORKDIR /app
RUN adduser -D -u 10001 appuser
COPY requirements.txt .
RUN apk add --no-cache build-base && \
    pip install --no-cache-dir -r requirements.txt && \
    apk del build-base
COPY app ./app
USER 10001
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8005"]
