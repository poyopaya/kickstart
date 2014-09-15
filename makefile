build:
	@echo "Getting latest..."
	@git pull

	@echo "Installing node dependencies..."
	@npm install

	@echo "Installing ruby dependencies..."
	@bundle

	@echo "Building project"
	@gulp build

build-rails:
	@make
	@gulp test
	@cd rails;gem build kickstart_rails.gemspec

setup:
	@sudo npm install -g gulp
	@sudo npm install
	@bundle install
