FROM node:16-alpine

WORKDIR /app

# Copy everything first
COPY . .

# Conditionally run npm install and build if package.json exists
RUN if [ -f package.json ]; then \
        npm install && \
        npm run build; \
    else \
        echo "No package.json found, skipping npm steps"; \
    fi

# Default command - adjust as needed for your application
CMD ["echo", "Container started"]