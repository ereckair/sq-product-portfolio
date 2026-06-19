#!/bin/bash
cd "$(dirname "$0")"
PORT="${PORT:-8080}"
echo "Serving SQ Product Portfolio at http://localhost:${PORT}"
echo "  Home:        http://localhost:${PORT}/"
echo "  Products:    http://localhost:${PORT}/products.html"
echo "  Pre-PLM:     http://localhost:${PORT}/pre-plm-agent/"
python3 -m http.server "$PORT"
