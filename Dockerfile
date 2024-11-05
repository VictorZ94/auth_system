# Use the official Python image from the DockerHub
FROM python:3.11-slim

# Set environment variables
ENV PYTHONUNBUFFERED=1

# Set the working directory in docker
WORKDIR /app

# Copy the dependencies file to the working directory
COPY requirements.txt /app

# Install any dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the content of the local src directory to the working directory
COPY . /app

# Specify the command to run on container start
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
