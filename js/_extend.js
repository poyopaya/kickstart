(function() {
  window.extend = function(objA, objB) {
    var p;
    for (p in objB) {
      if (typeof objA[p] === "object") {
        extend(objA[p], objB[p]);
      } else {
        objA[p] = objB[p];
      }
    }
    return objA;
  };

}).call(this);
