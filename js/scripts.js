function scrollToAnchor(aid){
  var aTag = $("a[name='"+ aid +"']");
  $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#link").click(function() {
 scrollToAnchor('#g');
});

// $("a[href^=#]").click(function(e) { e.preventDefault();
//   var dest = $(this).attr('href');
//   console.log(dest);
//   $('html,body').animate({ scrollTop: $(dest).offset().top }, 'slow'); 
// });