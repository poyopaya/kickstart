build:
	@echo "Getting latest..."
	@git pull
	
	@echo "Installing node dependencies..."
	@npm install
	
	@echo "Installing ruby dependencies..."
	@bundle
	
	@echo "Running tests..."
	@gulp docs:test
	
	@echo "Building project"
	@gulp build

build-rails:
	@echo "Bumping Rails gem version"
	@cd lib-docs/rails;gem bump
	
	@echo "Copying in assets"
	@mkdir -p rails
	@rm -rf rails/*
	@cp -r lib-docs/rails/app rails/
	@cp -r lib-docs/rails/lib rails/
	# @cp -r lib/sass/* rails/app/assets/stylesheets/
	@rsync -av --exclude-from 'rsync-exclude.txt' lib-docs/sass/ rails/app/assets/stylesheets/
	@cp -r public/js/kickstart.js rails/app/assets/javascripts/kickstart_rails
	@cp lib-docs/rails/Gemfile lib-docs/rails/kickstart_rails.gemspec lib-docs/rails/LICENSE lib-docs/rails/Rakefile lib-docs/rails/README.md rails/
	@cd rails;gem release

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
