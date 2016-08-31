$(document).ready(function () {
    
    /*var imgobj = $('a[href$=".jpg"],a[href$=".png"],a[href$=".gif,a[href$=".JPG"],a[href$=".PNG"],a[href$=".GIF"]');
    imgobj.attr("rel", "fancybox");

    $("a[rel=fancybox]").fancybox({
        'titleShow': true,
        'titlePosition': 'over'
    }); */

    var portfoliocount = $('.swing .acme_portfolio').length;
    var portfoliowidth = $('.swing .acme_portfolio').width();
    var wrapperwidth = portfoliocount * portfoliowidth;
    $('.swing .wrapper').css('width', wrapperwidth);

    $('.swing').swing();
    
    

   $(".portfolios").fadeTo(500,0.4);
  
  
   $(".portfolios").each(function(){ 
   
    
    
    $(this).hover(
          function () {
              $(this).fadeTo(500,1);
              $(this).css('cursor','pointer');
              $(this).find('.portfoliocontent').show();
          },
          function () {
              $(this).fadeTo(500,0.4);
              $(this).find('.portfoliocontent').hide();
          }
      );
    });
  
   $('#respond h3').click(function(){
    $('.formcontainer').toggle();
   });
  
  $('.headermenu ul li.page-item-2 a').attr('href','/');
  
  $('.headermenu ul li a').each(function(){
     $(this).addClass('fancybox');
   });
  
});

$(document).on('click', '.fancybox', function(e) {
  e.preventDefault();
  $.fancybox({
    href : $(this).attr('href'),
    type : 'iframe',
    width	:	'960',
    height: '400',
  });
});

