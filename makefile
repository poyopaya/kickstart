build:
	@rm -rf html
	@make prod
	@make test

build-simple:
	@make pre-build
	@make post-build

prod: 
	@make pre-build 
	@make jshint
	@make prune-apps
	@make spring-cleaning 
	@make post-build

test: 
	@echo "Clearing out previous folder..."
	@find . -name .DS_Store -exec rm -f {} \;
	@rm -rf tests/*
	@echo "Copying kickstrap folder..."
	@mkdir tests/kickstrap
	@cp -r lib/kickstrap/* tests/kickstrap/
	@cp -r lib/tests/* tests/
	@echo Skipping test creation for now.
	@echo "Build complete."

jade: 
	@jade lib/templates/pages/*.jade -O ./dist/kickstrap/_examples/ --pretty

jade-watch: 
	@jade lib/templates/pages/*.jade -O ./dist/kickstrap/_examples/ --pretty --watch

prune-apps:
	@echo "Delete contents of apps folder and individually select apps..."
	@rm -rf dist/kickstrap/apps/*
		@echo "-Animate.CSS"
		@cp -r lib/kickstrap/apps/animatecss dist/kickstrap/apps/
		
		@echo "-Bootstrap app references"
		@cp -r lib/kickstrap/apps/bootstrap dist/kickstrap/apps/

			@echo "Bootstrap files"
			@cp -r lib/repos/bootstrap dist/kickstrap/_core/
	
		@echo "-Waypoints"
		@cp -r lib/kickstrap/apps/waypoints dist/kickstrap/apps/

		@echo "-Ember.js"
		@cp -r lib/kickstrap/apps/ember dist/kickstrap/apps/

		@echo "-Ping"
		@cp -r lib/kickstrap/apps/ping dist/kickstrap/apps/
	
		@echo "-Knockout.js"
		@cp -r lib/kickstrap/apps/knockout dist/kickstrap/apps/
	
		@echo "-TinyGrowl"
		@cp -r lib/kickstrap/apps/tinygrowl dist/kickstrap/apps/
		@uglifyjs dist/kickstrap/apps/tinygrowl/tinygrowl.js -mc warnings=false > dist/kickstrap/apps/tinygrowl/tinygrowl.min.js 
		
		@echo "-jQuery Lint"
		@cp -r lib/kickstrap/apps/jquerylint dist/kickstrap/apps/
	
		@echo "-Updater"
		@cp -r lib/kickstrap/apps/updater dist/kickstrap/apps/
		
		@echo "-Firebug Lite"
		@cp -r lib/kickstrap/apps/firebuglite dist/kickstrap/apps/
	
		@echo "-Universal"
		@cp -r lib/kickstrap/apps/universal dist/kickstrap/apps/

spring-cleaning: 
	@echo "Removing some themes not ready for prime time..."
	@find . -name .DS_Store -exec rm -f {} \;
	@rm -r dist/kickstrap/themes/smallworld/*
	@rmdir dist/kickstrap/themes/smallworld
	@rm -r dist/kickstrap/themes/smallworld.less
	@rm -rf dist/kickstrap/themes/confetti/*
	@rmdir dist/kickstrap/themes/confetti
	@rm -r dist/kickstrap/themes/confetti.less
	@echo "Removing .git directory from Bootstrap"
	@rm -rf dist/kickstrap/bootstrap/.git dist/kickstrap/bootstrap/.[a-z]*
	@rm -rf tests/kickstrap/bootstrap/.git tests/kickstrap/bootstrap/.[a-z]*
	@echo "Spring cleaning"
	@rm -r dist/kickstrap/apps/universal/ks-window

jshint: 
	@echo "Running asset js files through jshint" 
	@jshint lib/kickstrap/_examples/assets/*.js 

pre-build: 
	@echo "Making our dist and tests folders if they don't already exist"
	@mkdir -p dist tests

	@echo "Clearing out previous folder..."
	@rm -rf dist/*

	@echo "Copying kickstrap folder..."
	@mkdir dist/kickstrap
	@cp -r lib/kickstrap/* dist/kickstrap/ 

	@echo "Copying in ui"
	@cp -r lib/kickstrap/ui/* dist/kickstrap/ui

	@echo "Copying in themes"
	@cp -r lib/kickstrap/themes/* dist/kickstrap/themes/ 

	@make jade

post-build: 
	@echo "Updating repos"
	@cd lib/repos/tinygrowl;git pull origin master;
	@cd lib/repos/bootstrap;git pull origin 3.0.0-wip;
	@# POST BUILD

	@echo "Moving in default index file"
	@cp dist/kickstrap/_examples/index.html dist/

	@echo "Moving in example assets"
	@cp lib/kickstrap/_examples/assets/* dist/kickstrap/_examples/assets

	@echo "Minifying files" 
	@uglifyjs dist/kickstrap/_core/js/less-1.4.0.js -mc warnings=false > dist/kickstrap/_core/js/less-1.4.0.min.js
	@uglifyjs dist/kickstrap/_core/js/kickstrap.js -mc warnings=false > dist/kickstrap/_core/js/kickstrap.min.js 
	@echo "Build complete."
