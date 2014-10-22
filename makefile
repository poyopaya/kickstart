build:
	@echo "Getting latest..."
	@git pull

	@echo "Installing node dependencies..."
	@npm install

	@echo "Installing ruby dependencies..."
	@bundle

	@echo "Running tests..."
	@gulp test

	@echo "Building project"
	@gulp build

build-rails:
	@gem bump
	@cd rails;gem build kickstart_rails.gemspec

build-node:
	@npm version patch
	@npm publish

build-all:
	@make
	@make build-rails
	@make build-node

setup:
	@sudo npm install -g gulp
	@sudo npm install
	@bundle install
