build:
	@make build-basic
	@make build-advanced

build-basic:
	@make reset
	@rm -rf dist/kickstrap/*
	@echo "TODO: Build Basic"

build-advanced:	
	@make reset
	@rm -rf dist/kickstrap-advanced/*
	@echo "Just building a new roots project for now, but will be a roots template."
	@roots new dist/kickstrap-advanced

reset:
	@mkdir -p dist
	@mkdir -p dist/kickstrap
	@mkdir -p dist/kickstrap-advanced
