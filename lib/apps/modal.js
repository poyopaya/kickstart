export class modal {
  constructor() {

    var $ = (el) => document.querySelectorAll(el);

    if ($('.modal').length) {
      this.open = (e) => {
  	    $('.modal')[0].style.display = 'block';
        return e.stopPropagation();
      }

  	  if ($('.modal .close').length) {
        $('.modal .close')[0].addEventListener('click', () => {
  	      return $('.se-modal')[0].style.display = 'none';
  	    });
      }

  	  // Allow modal to dismiss when clicked outside
      $('body')[0].addEventListener('click', () => {
        if ($('.modal[style="display: block;"]').length) {
          $('.modal[style="display: block;"]')[0].style.display = 'none';
        }
      });

      $('.modal')[0].addEventListener('click', (e) => e.stopPropagation() );
    }

    else {
      console.info("No .modal class found on page.")
    }
  }
}
