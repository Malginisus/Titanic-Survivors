# Stage 1: Pull code from Git repository and set up the environment

FROM node:18 AS base

# Install git to clone the repository
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Clone the Git repository into the container
# Replace <repo-url> with your actual Git repository URL
RUN git clone https://github.com/abhishekppattanayak/titanic-survivors.git /app

# Set the working directory
WORKDIR /app

# Install dependencies for the client (Vite React)
WORKDIR /app/client
COPY client/package*.json ./client/

# Install frontend dependencies
RUN npm install

# Install dependencies for the API (Python Flask)
WORKDIR /app/api
COPY api/requirements.txt ./api/

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Stage 2: Final image with both services

FROM node:18-slim

# Install Python and other necessary utilities
RUN apt-get update && apt-get install -y \
    python3 python3-pip git \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Clone the Git repository again (if needed for production code)
RUN git clone https://github.com/yourusername/your-repo.git /app

# Copy the React app and Flask API into the final image
COPY --from=base /app/client /app/client
COPY --from=base /app/api /app/api

# Install React (Vite) dependencies for the client
WORKDIR /app/client
RUN npm install --production

# Install Python dependencies for the API
WORKDIR /app/api
RUN pip install --no-cache-dir -r requirements.txt

# Expose the ports the apps will run on
EXPOSE 3000 5000

# Start the React development server and Flask API simultaneously
# We use "sh -c" to run both commands concurrently
CMD ["sh", "-c", "cd api && flask run --host=0.0.0.0 & cd client && npm run dev --host 0.0.0.0"]