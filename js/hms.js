$(window).on('load', function() { 
  $('#status').fadeOut(); 
  $('#preloader').delay(1000).fadeOut('slow'); 
  $('body').delay(1000).css({'overflow':'visible'});
})


var modal = document.getElementById('myModal');
var btn = document.getElementById("log");
btn.onclick = function() {
    modal.style.display = "block";
}
document.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} /*login*/

$(function() {
	var Page = (function() {
	var $navArrows = $( '#nav-arrows' ).hide(),
		$shadow = $( '#shadow' ).hide(),
		slicebox = $( '#sb-slider' ).slicebox( {
		onReady : function(){
						$navArrows.show();
						$shadow.show();
						},
						orientation : 'r',
						cuboidsRandom : true,
						disperseFactor : 30
						} ),
						
						init = function() {

							initEvents();
							
						},
						initEvents = function() {

							// add navigation events
							$navArrows.children( ':first' ).on( 'click', function() {

								slicebox.next();
								return false;

							} );

							$navArrows.children( ':last' ).on( 'click', function() {
								
								slicebox.previous();
								return false;

							} );

						};
						return { init : init };
							})();
					Page.init();

			});/*slider*/
			
var addmodal = document.getElementById('myModal1');
var btn1 = document.getElementById("addinfo");
btn1.onclick = function() {
    addmodal.style.display = "block";
}

document.onclick = function(event) {
    if (event.target == addmodal) {
        addmodal.style.display = "none";
    }
}
