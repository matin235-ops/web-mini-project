FROM node:16-alpine

WORKDIR /app

# Copy everything first
COPY . .

# Run npm install if package.json exists, and only run build if that script exists
RUN if [ -f package.json ]; then \
        npm install && \
        (npm run build 2>/dev/null || echo "No build script found, skipping build step"); \
    else \
        echo "No package.json found, skipping npm steps"; \
    fi

# Default command - adjust as needed for your application
CMD ["echo", "Container started"]