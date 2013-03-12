build:
	@rm -rf html
	@make prod
	@make test

prod: 
	@echo "Making our product and tests folders if they don't already exist"
	@mkdir -p product tests
	@echo "Clearing out previous folder..."
	@rm -rf product/*
	@echo "Copying kickstrap folder..."
	@mkdir product/kickstrap
	@cp -r assets/kickstrap/* product/kickstrap/
	@echo "Delete contents of apps folder and individually select apps..."
	@rm -rf product/kickstrap/apps/*
		@echo "-Animate.CSS"
		@cp -r assets/kickstrap/apps/animatecss product/kickstrap/apps/
		
		@echo "-Bootstrap"
		@cp -r assets/kickstrap/apps/bootstrap product/kickstrap/apps/
	
		@echo "-Ember.js"
		@cp -r assets/kickstrap/apps/ember product/kickstrap/apps/

		@echo "-Ping"
		@cp -r assets/kickstrap/apps/ping product/kickstrap/apps/
	
		@echo "-Knockout.js"
		@cp -r assets/kickstrap/apps/knockout product/kickstrap/apps/
	
		@echo "-Chosen"
		@cp -r assets/kickstrap/apps/chosen product/kickstrap/apps/
	
		@echo "-Color Schemer"
		@cp -r assets/kickstrap/apps/colorschemer product/kickstrap/apps/
	
		@echo "-Pines Notify"
		@cp -r assets/kickstrap/apps/pinesnotify product/kickstrap/apps/
	
		@echo "-jQuery Lint"
		@cp -r assets/kickstrap/apps/jquerylint product/kickstrap/apps/
	
		@echo "-Updater"
		@cp -r assets/kickstrap/apps/updater product/kickstrap/apps/
		
		@echo "-Firebug Lite"
		@cp -r assets/kickstrap/apps/firebuglite product/kickstrap/apps/
	
		@echo "-Universal"
		@cp -r assets/kickstrap/apps/universal product/kickstrap/apps/
	
	@echo "Removing some themes not ready for prime time..."
	@find . -name .DS_Store -exec rm -f {} \;
	@rm -r product/kickstrap/themes/smallworld/*
	@rmdir product/kickstrap/themes/smallworld
	@rm -r product/kickstrap/themes/smallworld.less
	@rm -rf product/kickstrap/themes/confetti/*
	@rmdir product/kickstrap/themes/confetti
	@rm -r product/kickstrap/themes/confetti.less
	@echo "Removing .git directory from Bootstrap"
	@rm -rf product/kickstrap/bootstrap/.git product/kickstrap/bootstrap/.[a-z]*
	@rm -rf tests/kickstrap/bootstrap/.git tests/kickstrap/bootstrap/.[a-z]*
	@echo "Spring cleaning"
	@rm -r product/kickstrap/apps/universal/ks-window
	@node build.js production
	@echo "Moving in default index file"
	@cp product/kickstrap/_examples/index.html product/

	@uglifyjs product/kickstrap/_core/js/less-1.4.0.js -mc > product/kickstrap/_core/js/less-1.4.0.min.js
	@uglifyjs product/kickstrap/_core/js/kickstrap.js -mc > product/kickstrap/_core/js/kickstrap.min.js 
	@echo "Build complete."

test: 
	@echo "Clearing out previous folder..."
	@find . -name .DS_Store -exec rm -f {} \;
	@rm -rf tests/*
	@echo "Copying kickstrap folder..."
	@mkdir tests/kickstrap
	@cp -r assets/kickstrap/* tests/kickstrap/
	@cp -r assets/tests/* tests/
	@node build.js test
	@echo "Build complete."
