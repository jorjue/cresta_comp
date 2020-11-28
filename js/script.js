jQuery(function() {
  $('#open-btn').click(function() {
    $(this).fadeOut();
    $('#menu').fadeToggle();
  });

  $('#close-btn').click(function() {
    $('#menu').fadeToggle();
    $('#open-btn').fadeIn();
  });
  
  $('.link').click(function() {
    $('#menu').fadeToggle();
    $('#open-btn').fadeIn();
  });

  $('.submit-btn').click(function(e) {
    e.preventDefault();

    const name = $('#name').val();
    const tel = $('#tel').val();
    const email = $('#email').val();
    const large = $('#large').val();

    if (name.length === 0 || tel.length === 0 || email.length === 0 || large.length === 0) {
      alert('必須項目が入力されていません');
    }

    if (name.length === 0) {
      $('#name').focus();
    } else if (tel.length === 0) {
      $('#tel').focus();
    } else if (email.length === 0) {
      $('#email').focus();
    } else if (large.length === 0) {
      $('#large').focus();
    }
    
  });

  $(document).ready(function () {
    let pagetop = $('.pagetop');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
});