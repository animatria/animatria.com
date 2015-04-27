jQuery( document ).ready(function( $ ) {
  // Code using $ as usual goes here.
	$('#promos_four-2.widget_promos_four').append( "<a id='poplink'><i class='fa fa-question'></i></a><div id='poptext'>PSI, FSI,BPI and CSI are Animatria’s proprietary indices, and are calculated by the algorithms devised by Animatria’s team</div>" );
	
	$( "a#poplink" ).click(function() {
		  $( "#poptext" ).toggleClass( "open-text" );
	});
});