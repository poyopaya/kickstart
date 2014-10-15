(function() {
  window.onscroll = function() {
    var $fixedArea, $isFixed, $marker, $offset;
    $marker = k$.$('#marker');
    $fixedArea = k$.$('.fixed-area');
    $offset = $marker.getBoundingClientRect().top;
    $isFixed = $fixedArea.classList.contains('fixed');
    if ($offset < 1) {
      if (!$isFixed) {
        $fixedArea.classList.add('fixed');
      }
      return $marker.scrollTop = '-50px';
    }
  };

}).call(this);
