@echo off
setlocal
chcp 65001 >nul
title Portfolio Local Server

cd /d "%~dp0"
set "PORT=8000"
set "URL=http://127.0.0.1:%PORT%/"

echo.
echo ========================================
echo   Portfolio local preview
echo   %URL%
echo ========================================
echo.

where py >nul 2>nul
if not errorlevel 1 (
    start "" "%URL%"
    py -m http.server %PORT% --bind 127.0.0.1
    goto :end
)

where python >nul 2>nul
if not errorlevel 1 (
    python --version >nul 2>nul
    if not errorlevel 1 (
        start "" "%URL%"
        python -m http.server %PORT% --bind 127.0.0.1
        goto :end
    )
)

where node >nul 2>nul
if not errorlevel 1 (
    start "" "%URL%"
    node "%~dp0static-server.js" %PORT%
    goto :end
)

echo [ERROR] Python or Node.js was not found.
echo Install either runtime and run this file again.
pause
exit /b 1

:end
echo.
echo Server stopped.
pause

