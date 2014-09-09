global.k$ = new Object()

k$.$$ = (el) -> document.querySelectorAll el
k$.$ = (el) -> k$.$$(el)[0]
k$.debounceTimer = false
k$.debounceQueue = null

module.exports = k$
