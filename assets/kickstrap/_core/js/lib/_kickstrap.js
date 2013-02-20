// VARIABLES
// =========

var cursorSpot = 0,
  commandArray = ['help']
  , commandSpot = 0
  , mouseIn = false
  , kbash = new Object()

// LIBRARY FUNCTIONS
// =================

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

// Quick lookup of flags, args, and opts.
Array.prototype.have = function (value) { return this.indexOf(value) > 0 ? true : false; }

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
      $('span.cursor').append('&#9617;')

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

          // Create command tree.
          var commandTree = { 
            rootCommand: command[0]
            , args: []
            , flags: []
            , opts: []
            , props: { 
              empty: 'false' 
            }
          }

          for ( var i = 0; i < params.length; i++ ) {
            // Remove opts ("--option") from params
            // Remove flags ("-f") from params
            if (params[i].substr(0,1) == "-") {
              if (params[i].substr(0,2) == "--") {
                commandTree.opts.push(params[i].substring(2,params[i].length))
              }
              else {
                commandTree.flags = commandTree.flags.concat((params[i].substring(1,params[i].length)).split(''))
              }
              params.remove(i)
              i--
            }
          }

          // We assume everything left are arguments.
          commandTree.args = params;

          // Set some properties for quick access.
          if ( 
            commandTree.args.length == 0
            && commandTree.flags.length == 0
            && commandTree.opts.length == 0
          ) {
            commandTree.props.empty = true;
          }

          // Ready to send the flags and args to the root command
          kbash[commandTree.rootCommand](
            commandTree.args
            , commandTree.flags
            , commandTree.opts
            , commandTree.props
          ) 
        }

        // Invalid command
        else {
          console.kbash('-kbash: ' + request + ': Command not found.') 
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
        console.kbash('> ' + item)
        setRequest(item)
        $(input).val('')
        setCursor()
      }
      console.kbash = function (string) {
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

      // SAMPLE KBASH EXTENSIONS
      // =======================

      kbash.say = function(args, flags, opts, props) {
        console.log(args)
        console.log(flags)
        console.log(opts)
        if (props.empty == true) { console.kbash('Please supply an argument') }
        else {
          console.kbash(flags.have('v'))
          console.kbash(flags.have('v') ? 'Hello, it is very good to see you this fine day.' : 'Hi')
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
