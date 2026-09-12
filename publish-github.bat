@echo off
setlocal EnableExtensions
chcp 65001 >nul
title Portfolio - Publish to GitHub

cd /d "%~dp0"

echo.
echo ========================================
echo   Portfolio GitHub One-Click Publisher
echo ========================================
echo.

where git >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Git was not found. Install Git for Windows first.
    goto :failed
)

if not exist ".git" (
    echo [ERROR] This folder is not a Git repository.
    goto :failed
)

git remote get-url origin >nul 2>nul
if errorlevel 1 (
    echo [ERROR] GitHub remote "origin" is not configured.
    goto :failed
)

for /f "delims=" %%B in ('git branch --show-current') do set "PUBLISH_BRANCH=%%B"
if not defined PUBLISH_BRANCH (
    echo [ERROR] Could not determine the current branch.
    goto :failed
)

echo Branch: %PUBLISH_BRANCH%
for /f "delims=" %%R in ('git remote get-url origin') do echo GitHub: %%R
echo.

git status --short
for /f "delims=" %%S in ('git status --porcelain') do goto :commit_changes
goto :push

:commit_changes
echo.
echo Staging current portfolio changes...
git add -A
if errorlevel 1 goto :failed

git diff --cached --quiet
if not errorlevel 1 goto :push

echo Creating an automatic commit...
git commit -m "Update portfolio"
if errorlevel 1 goto :failed

:push
set /a "PUSH_ATTEMPT=1"

:retry_push
echo.
echo Pushing to GitHub - attempt %PUSH_ATTEMPT% of 5...
git -c http.version=HTTP/1.1 push origin "%PUBLISH_BRANCH%"
if not errorlevel 1 goto :success

if %PUSH_ATTEMPT% GEQ 5 goto :network_failed
set /a "PUSH_ATTEMPT+=1"
echo GitHub connection failed. Retrying in 5 seconds...
timeout /t 5 /nobreak >nul
goto :retry_push

:success
echo.
echo [SUCCESS] GitHub publishing completed.
echo Website: https://toke-kang.github.io/portfolio/
echo GitHub Pages may need a short time to refresh.
goto :end

:network_failed
echo.
echo [ERROR] GitHub could not be reached after 5 attempts.
echo Your commit is safe locally. Run this file again after the network recovers.
goto :failed

:failed
echo.
echo Publishing was not completed. No project files were deleted.
pause
exit /b 1

:end
echo.
pause
exit /b 0
