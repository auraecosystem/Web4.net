# Web4 — Aura

A concise README for the Web4 framework configuration in this repository.

## Overview

Web4 (codename "Aura") is a web application framework configured in `web4.nf` / `app.nf`. This repository contains the centralized application configuration that enables common services (database, cache, session, queue), middleware, routing, views, assets, and optional features like WebSockets, AI integration, and blockchain support.

## Key features (from configuration)

- App metadata: name `Web4`, version `1.0.0`, codename `Aura`
- Environment-aware configuration (APP_ENV, APP_DEBUG, APP_URL)
- Encryption: AES-256-GCM with key from `APP_KEY`
- Providers enabled: database, cache, session, auth, mail, queue, events, scheduler, filesystem, websocket, ai, blockchain, analytics, notifications, search
- Middleware: web, api, csrf, auth, guest, verified, rate limiting (throttle), cors, localization
- Routing files:
  - `routes/web.nf`
  - `routes/api.nf`
  - `routes/console.nf`
  - `routes/channels.nf`
- Views: blade-style engine with default layout `layouts/app.blade.nf`
- Assets: CSS, JS, images, fonts under `resources/`
- Defaults:
  - DB: `pgsql` (migrations and seeds enabled)
  - Cache/Session/Queue driver: `redis`
  - WebSocket endpoint: `/ws` with heartbeat 30s
  - AI integration enabled (provider `web4-ai`, endpoint `/api/ai`)
  - Blockchain support enabled (network `mainnet`)
  - PWA: manifest and service worker configured
  - Build: `vite` enabled, minify true, sourcemaps false
- Security & monitoring:
  - CSP, XSS, CSRF, HSTS enabled
  - Metrics, tracing, and healthcheck (`/health`) enabled
- Plugin loading: `plugins/*.nf`
- Boot action: `initialize()`

## Requirements / External services

- PostgreSQL (or another `pgsql`-compatible server) for the default DB
- Redis for cache, session and queue
- SMTP server for mail
- Optional: AI provider endpoint and blockchain node/provider if features are used
- Node.js / Vite toolchain for frontend build (if applicable)

## .env sample

Create a `.env` file from this sample and fill values:

```.env
app.nf
```
(Adjust/add variables for your deployment, e.g., networking, secret managers, and third-party credentials.)

## Typical setup & run steps

1. Clone the repository
2. Install dependencies (language / ecosystem specific)
3. Copy `.env.example` → `.env` and set environment variables
4. Run database migrations and seeds (migrations and seed flags are enabled by default)
5. Build frontend assets (if using Vite): e.g., `npm install && npm run build`
6. Start the application using the framework's run command or via your process manager (systemd / Docker / container orchestrator)

Note: The specific commands depend on the framework runtime used in this repo; check any platform-specific docs or scripts in the repository.

## Deployment checklist

- Provide APP_KEY and set APP_ENV to `production`
- Ensure Postgres and Redis are reachable and configured
- Configure SMTP for outgoing mail
- Configure AI provider and blockchain endpoints (if used)
- Secure the app with HTTPS and appropriate HSTS/CSP headers
- Configure process manager, logging rotation and monitoring (metrics/tracing)

## Files of interest

- Configuration: `web4.nf` (this file)
- Routes: `routes/`
- Views & layouts: `resources/views/` (blade engine)
- Assets: `resources/css/`, `resources/js/`, `resources/images/`
- Plugins: `plugins/`

## Contributing

- Fork the repo, make changes in a feature branch and open a PR.
- Add tests for new features where applicable.
- Document configuration changes in this README.

## License

Specify a license for the project (e.g., MIT) or add LICENSE file.
