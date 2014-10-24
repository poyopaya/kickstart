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
	@cd lib/rails;gem bump
	@mkdir -p rails
	@rm -rf rails/*
	@cp -r lib/rails/app rails/
	@cp -r lib/rails/lib rails/
	@cp lib/rails/Gemfile lib/rails/kickstart_rails.gemspec lib/rails/LICENSE lib/rails/Rakefile lib/rails/README.md rails/
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
