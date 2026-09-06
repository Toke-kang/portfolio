@echo off
setlocal EnableExtensions
chcp 65001 >nul
title Portfolio GitHub Deployment

cd /d "%~dp0"

echo.
echo ========================================
echo   Portfolio deployment to GitHub
echo ========================================
echo.

where git >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Git was not found. Install Git for Windows first.
    goto :failed
)

if not exist ".git" (
    echo [ERROR] This directory is not a Git repository.
    goto :failed
)

for /f "delims=" %%B in ('git branch --show-current') do set "CURRENT_BRANCH=%%B"
if not defined CURRENT_BRANCH (
    echo [ERROR] Could not determine the current Git branch.
    goto :failed
)

git remote get-url origin >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Git remote "origin" is not configured.
    goto :failed
)

echo Branch: %CURRENT_BRANCH%
for /f "delims=" %%R in ('git remote get-url origin') do echo Remote: %%R
echo.
git status --short
echo.

set /p "CONFIRM=Stage, commit, and push ALL changes shown above? [y/N]: "
if /i not "%CONFIRM%"=="y" (
    echo Deployment cancelled.
    goto :end
)

set /p "COMMIT_MESSAGE=Commit message (Enter for automatic message): "
if not defined COMMIT_MESSAGE set "COMMIT_MESSAGE=Update portfolio"

echo.
echo [1/4] Staging files...
git add -A
if errorlevel 1 goto :failed

echo [2/4] Creating commit...
git diff --cached --quiet
if errorlevel 1 (
    git commit -m "%COMMIT_MESSAGE%"
    if errorlevel 1 goto :failed
) else (
    echo No new changes to commit; continuing with push.
)

echo [3/4] Synchronizing remote branch...
git pull --rebase origin "%CURRENT_BRANCH%"
if errorlevel 1 (
    echo [ERROR] Pull/rebase failed. Resolve the conflict, then run deploy.bat again.
    goto :failed
)

echo [4/4] Pushing to GitHub...
git push origin "%CURRENT_BRANCH%"
if errorlevel 1 goto :failed

echo.
echo Deployment completed successfully.
echo If GitHub Pages is enabled, allow a few minutes for the site to update.
goto :end

:failed
echo.
echo Deployment failed. Review the message above; no files were deleted.
pause
exit /b 1

:end
echo.
pause
exit /b 0

