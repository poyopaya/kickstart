build:
	@rm -rf html
	@make prod
	@make test

prod: 
	@make pre-build 
	@make jade
	@make jshint
	@make prune-apps
	@make spring-cleaning 
	@make post-build

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

jade: 
	@jade lib/templates/pages/*.jade -O ./dist/kickstrap/_examples/ --pretty

jade-watch: 
	@jade lib/templates/pages/*.jade -O ./dist/kickstrap/_examples/ --pretty --watch

jshint: 
	@echo "Running asset js files through jshint" 
	@jshint lib/kickstrap/_examples/assets/*.js 

prune-apps:
	@echo "Moving in apps"
	@rm -rf dist/kickstrap/apps/*
	@cp -r lib/kickstrap/apps/* dist/kickstrap/apps/
	
	@echo "-Bootstrap app references"
	@cp -r lib/kickstrap/apps/bootstrap dist/kickstrap/apps/

		@echo "Bootstrap files"
		@cp -r lib/repos/bootstrap dist/kickstrap/_core/

spring-cleaning: 
	@echo "Getting rid of meta files"
	@find . -name .DS_Store -exec rm -f {} \;
	@echo "Removing .git directory from Bootstrap"
	@rm -rf dist/kickstrap/bootstrap/.git dist/kickstrap/bootstrap/.[a-z]*
	@rm -rf tests/kickstrap/bootstrap/.git tests/kickstrap/bootstrap/.[a-z]*

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