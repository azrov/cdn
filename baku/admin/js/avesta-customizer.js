$(function(){
  'use strict'

  // Navigation Customizer
  $('body').on('click', '#avestaSettingsShow', function(e){
    e.preventDefault()

    $('.avesta-settings').toggleClass('show');
  })

  $('body').on('click', '.avesta-mode', function(e){
    e.preventDefault();

    if(!$(this).hasClass('disabled')) {
      $(this).parent().siblings().find('.avesta-mode').removeClass('active');
      $(this).addClass('active');

      var mode = $(this).attr('data-title');

      if(mode === 'default') {
        $('#avestaMode').remove();
      } else {

        if($('#avestaMode').length === 0) {
          if($('#avestaSkin').length === 0) {
            $('head').append('<link id="avestaMode" rel="stylesheet" href="assets/css/skin/skin.'+mode+'.css">');
          } else {
            $('<link id="avestaMode" rel="stylesheet" href="assets/css/skin/skin.'+mode+'.css">').insertBefore($('#avestaSkin'));
          }
        } else {
          $('#avestaMode').attr('href', 'assets/css/skin/skin.'+mode+'.css');
        }
      }
    }
  })

  $('body').on('click', '.avesta-demo-customizer', function(e){
    e.preventDefault();

    $(this).parent().siblings().find('.avesta-demo-customizer').removeClass('active');
    $(this).addClass('active');

    var skin = $(this).attr('data-title');

    if(skin === 'default') {
		$('#avestaSkin').remove();
    } else {
		if($('#avestaSkin').length === 0) {
			$('head').append('<link id="avestaSkin" rel="stylesheet" href="assets/css/skin/skin.'+skin+'.css">')
		} else {
			$('#avestaSkin').attr('href', 'assets/css/skin/skin.'+skin+'.css');
		}
    }

  })

  $('body').on('click', '#setFontRoboto', function(e){
    e.preventDefault()
    $('body').addClass('tx-roboto')
    $(this).addClass('active-font');
    $('#setFontBase').removeClass('active-font');
  })

  $('body').on('click', '#setFontBase', function(e){
    e.preventDefault()
    $('body').removeClass('tx-roboto');
    $(this).addClass('active-font');
    $('#setFontRoboto').removeClass('active-font');
  })
  
  $('body').on('click', '#setFontPoppins', function(e){
    e.preventDefault()
    $('body').addClass('tx-poppins')
    $(this).addClass('active-font');
    $('#setFontRoboto').removeClass('active-font');
  })

  $('body').on('click', '#setFontRoboto', function(e){
    e.preventDefault()
    $('body').removeClass('tx-poppins');
    $(this).addClass('active-font');
    $('#setFontPoppins').removeClass('active-font');
  })
  
  $('body').on('click', '#setFontPoppins', function(e){
    e.preventDefault()
    $('body').addClass('tx-poppins')
    $(this).addClass('active-font');
    $('#setFontOpenSans').removeClass('active-font');
  })

  $('body').on('click', '#setFontOpenSans', function(e){
    e.preventDefault()
    $('body').removeClass('tx-poppins');
    $(this).addClass('active-font');
    $('#setFontPoppins').removeClass('active-font');
  })
  
  $('body').on('click', '#setFontPoppins', function(e){
    e.preventDefault()
    $('body').addClass('tx-poppins')
    $(this).addClass('active-font');
    $('#setFontBase').removeClass('active-font');
  })

  $('body').on('click', '#setFontBase', function(e){
    e.preventDefault()
    $('body').removeClass('tx-poppins');
    $(this).addClass('active-font');
    $('#setFontPoppins').removeClass('active-font');
  })
  
  $('body').on('click', '#setFontOpenSans', function(e){
    e.preventDefault()
    $('body').addClass('tx-open-sans')
    $(this).addClass('active-font');
    $('#setFontBase').removeClass('active-font');
  })

  $('body').on('click', '#setFontBase', function(e){
    e.preventDefault()
    $('body').removeClass('tx-open-sans');
    $(this).addClass('active-font');
    $('#setFontOpenSans').removeClass('active-font');
  })
  
  
  $('body').on('click', '#setFontOpenSans', function(e){
    e.preventDefault()
    $('body').addClass('tx-open-sans')
    $(this).addClass('active-font');
    $('#setFontRoboto').removeClass('active-font');
  })

  $('body').on('click', '#setFontRoboto', function(e){
    e.preventDefault()
    $('body').removeClass('tx-open-sans');
    $(this).addClass('active-font');
    $('#setFontOpenSans').removeClass('active-font');
  })
  
  $('body').on('click', '#setFontOpenSans', function(e){
    e.preventDefault()
    $('body').addClass('tx-open-sans')
    $(this).addClass('active-font');
    $('#setFontPoppins').removeClass('active-font');
  })

  $('body').on('click', '#setFontPoppins', function(e){
    e.preventDefault()
    $('body').removeClass('tx-open-sans');
    $(this).addClass('active-font');
    $('#setFontOpenSans').removeClass('active-font');
  }) 
  
  
})
