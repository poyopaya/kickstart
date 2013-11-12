define ['./module'], (directives) ->
	directives.directive 'enter', [->
		(scope, element, attrs) ->
			element.bind "keydown keypress", (event) ->
				if event.which is 13
					scope.$apply ->
						scope.$eval attrs.enter
					event.preventDefault()
	]