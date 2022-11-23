#!make
MAKEFLAGS += --silent

dev:
	node_modules/.bin/nodemon index.js

test:
	NODE_ENV=test \
	LOG_ENABLED=false \
	LOG_LEVEL=silent \
	npm test

#  Run test when a file changes
# watch:
# 	node_modules/.bin/chokidar 'test/**/*.js' -c 'node_modules/.bin/tape {path}'

.PHONY: test
.PHONY: dev
.PHONY: watch