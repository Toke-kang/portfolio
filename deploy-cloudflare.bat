@echo off
setlocal EnableExtensions
chcp 65001 >nul
cd /d "%~dp0"

set "PUBLISH_DIR=%~dp0cloudflare-dist-current"
set "TOOLS_DIR=%~dp0cloudflare-tools"
set "FFMPEG=%TOOLS_DIR%\node_modules\ffmpeg-static\ffmpeg.exe"

where npm >nul 2>nul
if errorlevel 1 (
    echo [ERROR] npm was not found. Install Node.js first.
    goto :failed
)

if not exist "%PUBLISH_DIR%" mkdir "%PUBLISH_DIR%"
copy /y "index.html" "%PUBLISH_DIR%\" >nul || goto :failed
copy /y "styles.css" "%PUBLISH_DIR%\" >nul || goto :failed
copy /y "portfolio.js" "%PUBLISH_DIR%\" >nul || goto :failed
copy /y ".nojekyll" "%PUBLISH_DIR%\" >nul || goto :failed
robocopy "resources" "%PUBLISH_DIR%\resources" /MIR /NFL /NDL /NJH /NJS /NP >nul
if errorlevel 8 goto :failed

if not exist "%FFMPEG%" (
    echo Downloading the local publishing encoder for the first run...
    call npm install --prefix "%TOOLS_DIR%" ffmpeg-static@latest --no-save
    if errorlevel 1 goto :failed
)

echo Preparing Pages-compatible video copies. Source videos remain unchanged...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ffmpeg='%FFMPEG%'; Get-ChildItem -LiteralPath '%PUBLISH_DIR%\resources' -File -Recurse | Where-Object Length -gt 24MB | ForEach-Object { $out=$_.FullName+'.compressed.mp4'; Write-Host ('Compressing '+$_.Name); & $ffmpeg -loglevel error -y -i $_.FullName -map 0:v:0 -map '0:a?' -c:v libx264 -preset veryfast -crf 30 -c:a aac -b:a 96k -movflags +faststart $out; if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }; Move-Item -LiteralPath $out -Destination $_.FullName -Force }"
if errorlevel 1 goto :failed

call npx wrangler@latest pages deploy "%PUBLISH_DIR%" --project-name ariestoke --branch main --commit-dirty=true
if errorlevel 1 goto :failed

echo Cloudflare Pages deployment completed: https://ariestoke.pages.dev/
goto :end

:failed
echo [ERROR] Cloudflare Pages deployment failed. Source videos were not modified.
if /i not "%~1"=="--no-pause" pause
exit /b 1

:end
if /i not "%~1"=="--no-pause" pause
exit /b 0
