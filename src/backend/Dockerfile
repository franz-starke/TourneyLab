FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    sqlite3 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY src/backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY src/backend /app
# Set environment variables
ENV PYTHONUNBUFFERED=1

# Create necessary directories (optional)
RUN mkdir -p /app/data/db

# Expose FastAPI port
EXPOSE 8000

# Start FastAPI with auto-reload (only for dev)
CMD ["uvicorn", "api:api", "--host", "0.0.0.0", "--port", "8000", "--reload"]