kbash.ping = function(args, flags, opts, props) {
  switch(args.length) {
    case 0: 
    console.kbash('ping is ready, please supply an accessible data point relative to this directory.')
    break;

    default:
      for (var i = 0; i < args.length; i ++ ) {
        $.ajax({
          url: args[i],
          beforeSend: function() {
            console.kbash('pinging. Errors will appear in browser console.')
          },
          success: function(data, jqXHR) {
            console.kbash('XHR: ' + jqXHR + '.')
          }
        })
      }
    break;
  }
}