global.k$ = new Object()

k$.$$ = (el) -> document.querySelectorAll el
k$.$ = (el) -> k$.$$(el)[0]

module.exports = k$
