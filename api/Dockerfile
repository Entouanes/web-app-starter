# Use python:3.9 as the base image
FROM python:3.9

# Set the working directory to /app
WORKDIR /app

# Copy requirements.txt to the working directory
COPY requirements.txt .

# Run pip install -r requirements.txt to install dependencies
RUN pip install -r requirements.txt

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 8000
EXPOSE 8000

# Set the command to run uvicorn main:app --host 0.0.0.0 --port 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
