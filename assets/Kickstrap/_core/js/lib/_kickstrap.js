define(['jquery'],
    function($) {

      // DOM CREATION
      // ============

      // Create Kickstrap Debug UI
      // -------------------------

      var commandChain = [];
      var commandChainLevel = 0;
      var code =null;

      $('body').append('<footer class="kickstrap"></footer>');
      $('footer.kickstrap').append('<div class="cli"></div>');
      $('footer.kickstrap div.cli').append('<p>Status: Unknown</p>')
      	.append('<span>&gt;&nbsp;</span><input type="text" />')
      	.append('<div class="pull-right"><i class="glyphicon-info-sign"></i></div>')

      // Mouseover reveal 
      $('div.cli').mouseover(function() {
      	$('div.cli p').hide();
      	$('div.cli input, div.cli span').show();
      	$('div.cli input').focus();
      })
      $('div.cli input').blur(function() {
      	$('div.cli p').fadeIn('fast');
      	$('div.cli input, div.cli span').fadeOut('fast');
      })

      // Enter key actions 
      $('div.cli input').keypress(function(e) {
        code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
        	// Add to the command history
        	commandChain.push($('div.cli input').val())
        	eval($('div.cli input').val())
        	$('div.cli input').val('')
        	commandChainLevel = 0;
        	e.preventDefault();
        }
        if (code == 38) {
        	if (commandChainLevel != commandChain.length) commandChainLevel++;
        	console.log(commandChainLevel)
        	$('div.cli input').val(commandChain[commandChain.length - commandChainLevel])
        	e.preventDefault();
        }
        else { return; }
      });


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
