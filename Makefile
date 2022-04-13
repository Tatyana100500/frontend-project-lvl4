install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint . --ext js,jsx

start:
	heroku local -f Procfile.dev

start-backend:
	npx nodemon bin/slack.js

start-frontend:
	npx webpack server

build:
	npm run build

restart:
	rm -rf dist
	npm run build
	heroku local -f Procfile.dev