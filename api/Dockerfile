# Use python:3.9 as base image
FROM python:3.9

# Set working directory to /app
WORKDIR /app

# Copy requirements.txt to /app
COPY requirements.txt /app

# Run pip install -r requirements.txt to install dependencies
RUN pip install -r requirements.txt

# Copy all files to /app
COPY . /app

# Expose port 8000
EXPOSE 8000

# Set command to run uvicorn main:app --host 0.0.0.0 --port 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
