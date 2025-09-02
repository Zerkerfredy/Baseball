# Baseball Project

A modern React application built with Vite and TypeScript for a baseball organization.

## Features

- Modern React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Responsive design
- Component-based architecture

## Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Docker

### Building the Docker Image

```bash
docker build -t baseball-app .
```

### Running the Container

```bash
docker run -p 8080:80 baseball-app
```

Then open [http://localhost:8080](http://localhost:8080) to view the application.

### Docker Compose (Optional)

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  baseball-app:
    build: .
    ports:
      - "8080:80"
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

## Build

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (for icons)
- Nginx (for Docker deployment)
