// VARIABLES
// =========

var cursorSpot = 0,
  commandArray = ['help']
  , commandSpot = 0
  , mouseIn = false
  , kbash = new Object()

// JQUERY DEPENDENT CODE
// =====================

define(['jquery'],
    function($) {

      // DOM CREATION
      // ============

      $('body').append('<footer class="debug"></footer>');
      $('footer.debug')
        .append('<input>')
        .append('<nav class="console"></nav>')
        .append('<nav class="input"></nav>')
      $('nav.input')
        .append('&gt;&nbsp;<span class="input"></span>')
        .append('<span class="cursor"></span>')
      $('span.cursor').append('&#9612;')

      // VARIABLES (JQ DEPENDENT)
      // ========================

      var nav = $('footer.debug nav')
      , input = $('input')
      , span = $('span.cursor')
      , mainConsole = $('nav.console')
      , fakeInput = $('span.input')

      // NAV -> INPUT CLICK DEFERMENT
      // ============================

      $(nav).click(function() {
        $(input).focus()
        $(span).html('&#9612;')
        $(mainConsole).fadeIn('fast')
      });
      $(input).on('blur', function() {
        $(span).html('&#9617;')
        if (!mouseIn) $(mainConsole).fadeOut('fast')
      })

      // Don't hide the console if we're trying to drag on it.
      $(mainConsole).hover(
        function() { mouseIn = true; },
        function() { mouseIn = false; }
      )

      // KEY-READING
      // ===========

      $(input).keyup(function(e) {
          setCursor(0)
          // Enter key
          if( e.keyCode == 13 ) {
            e.preventDefault();
            if ($(input).val().length > 0) {
              setCommandArray( $(input).val() )
              commandSpot = 0
            }
          }
      });
      $(input).keydown(function(e) {
        if (e.keyCode == 38) { // Up arrow
          // TODO: Set lower limit
          commandSpot--
          setInput()
        }
        if (e.keyCode == 40) { // Down arrow
          // TODO: Set upper limit
          commandSpot++
          setInput()
        }
      });

      // GETTERS
      // =======

      function getCommandArray(index) {
        return commandArray[index] 
      }
      function getResponse(request) {

        var command = request.split(' ');

        // Determine if this is even valid before we do anything else.
        if (typeof kbash[(command[0])] == "function") {

          // Strip args and flags from main command as "params"
          var params = command.slice(1,command.length)

          console.log('params: ' + params)

          // Create command tree from parsed values.
          var commandTree = { 
            rootCommand: command[0]
            , args: ''
            , flags: ''
          }
          kbash[commandTree.rootCommand](commandTree.args, commandTree.flags) 
        }

        // Invalid command
        else {
          setConsole('-kbash: ' + request + ': Command not found.') 
        }
      }

      // SETTERS
      // =======

      function setInput() {
        var newString = getCommandArray((commandArray.length + commandSpot))
        $(input).val(newString)
        setCursor()
      }
      function setCommandArray(item) {
        commandArray = commandArray.concat(item)
        setConsole('> ' + item)
        setRequest(item)
        $(input).val('')
        setCursor()
      }
      function setConsole(string) {
         $(mainConsole).append('<p>' + string +'</p>').scrollTop($(mainConsole)[0].scrollHeight)
      }
      function setCursor(spot) {
        // Write in the nav
        spot = (spot || cursorSpot)  
        $(fakeInput).html($(input).val());
        // TODO: Allow the user to control cursor with arrow keys.
      }
      function setRequest(request) {
         // TODO: Parse for flags, commands, arguments and options.
         getResponse(request);
      }

      // SAMPLE KBASH EXTENSION
      // ======================

      kbash.say = function(args, flags) {
         setConsole('what would you like me to say?')
         console.log(args)
         console.log(flags)
         for(var i; i<params.length; i++) {
           setConsole(String(params[i]))
         }
      }

    }
);

/*
When people see some things as beautiful,
other things become ugly.
When people see some things as good,
other things become bad.

Being and non-being create each other.
Difficult and easy support each other.
Long and short define each other.
High and low depend on each other.
Before and after follow each other.

Therefore the Master
acts without doing anything
and teaches without saying anything.
Things arise and she lets them come;
things disappear and she lets them go.
She has but doesn't possess,
acts but doesn't expect.
When her work is done, she forgets it.
That is why it lasts forever.
*/
