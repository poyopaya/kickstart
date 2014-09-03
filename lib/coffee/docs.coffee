System.import('modal.css!').catch(console.error.bind(console));
System.import('modal').then((ks) ->
  new ks.modal()
).catch(console.error.bind(console));
