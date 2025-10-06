# Project Setup - iii4

## Overview
This is a full-stack web application with:
- **Backend**: Python FastAPI with MongoDB
- **Frontend**: Next.js 14 (React framework)

## Project Structure
```
/app/
├── backend/           # FastAPI backend
│   ├── server.py     # Main API server
│   ├── requirements.txt
│   └── .env          # Backend environment variables
├── frontend/         # Next.js frontend
│   ├── app/         # Next.js app directory
│   ├── src/         # Source files
│   ├── public/      # Static assets
│   ├── package.json
│   └── .env         # Frontend environment variables
```

## Services Running
All services are managed by supervisor and running on:

- **Backend API**: http://localhost:8001
- **Frontend**: http://localhost:3000
- **MongoDB**: localhost:27017

## Environment Variables

### Backend (.env)
- `MONGO_URL=mongodb://localhost:27017`
- `DB_NAME=app_db`
- `CORS_ORIGINS=*`

### Frontend (.env)
- `NEXT_PUBLIC_BACKEND_URL=http://localhost:8001`

## API Endpoints

### Status Check API
- `GET /api/` - Hello World endpoint
- `POST /api/status` - Create status check
- `GET /api/status` - Get all status checks

## Service Commands

```bash
# Check service status
sudo supervisorctl status

# Restart services
sudo supervisorctl restart backend
sudo supervisorctl restart frontend
sudo supervisorctl restart all

# View logs
tail -f /var/log/supervisor/backend.err.log
tail -f /var/log/supervisor/frontend.err.log
```

## Development

### Backend
```bash
cd /app/backend
pip install -r requirements.txt
# Service will auto-restart on code changes
```

### Frontend
```bash
cd /app/frontend
yarn install
# Service will auto-restart on code changes
```

## Testing
```bash
# Test backend API
curl http://localhost:8001/api/

# Test frontend
curl http://localhost:3000
```

## Notes
- Hot reload is enabled for both backend and frontend
- All services auto-start on system boot
- MongoDB data persists in /data/db
