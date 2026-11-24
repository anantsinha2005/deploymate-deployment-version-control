# Project 13 — DeployMate: Deployment & Version Control Lab

**Created by Anant Sinha**

DeployMate is a responsive deployment workflow dashboard for practicing Git, GitHub, and production deployment steps.

## Features
- 4-stage deployment checklist with live progress tracking
- Git command reference with copy-to-clipboard
- Responsive layout
- Express static hosting and health endpoint
- Clear version-control to deployment workflow guide

## Stack
Node.js, Express, HTML, CSS, JavaScript

## Run locally
```bash
npm install
npm start
```
Open http://localhost:4000

Health check: http://localhost:4000/health

## Git commands for your own repo
```bash
git init
git add .
git commit -m "Initial project commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```
