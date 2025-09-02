@echo off
echo ==== Convex Site Build & Export ====
echo This will install dependencies and generate the 'out' folder for Netlify.
echo.

REM Ensure Node.js and npm are installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
  echo ERROR: Node.js is not installed or not in PATH.
  echo Please install Node.js from https://nodejs.org/ first.
  pause
  exit /b 1
)

REM Move to script directory
cd /d %~dp0

echo Installing dependencies...
npm install

echo Building project...
npm run build

echo Exporting static site...
npm run export

echo.
echo Done! The 'out' folder is ready to upload to Netlify (Deploys -> Upload deploy).
pause
