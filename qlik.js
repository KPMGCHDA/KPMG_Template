/*global require*/
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});

require( ["js/qlik"], function ( qlik ){

	qlik.setOnError( function ( error ){
		alert( error.message );
	});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function () {
		qlik.resize();
	});

	$('button[data-widget="collapse"]').click( function () {
		qlik.resize();
	});
	
  
  
	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('dab9e1cc-2830-4bd7-9c8c-defd4e0b6bf1', config);

	var app1 = qlik.openApp('23103b0a-5cea-42a8-b006-a8ecce0d88a3', config);

  
	//get objects -- inserted here --
	app1.getObject('QV7','JmRgDL');
	
	app1.getObject('QV2','xbPjzYy');
	
	app1.getObject('QV1','ZLaRcd');
	
	app1.getObject('QV6','PsJaSmk');
	
	app1.getObject('QV5','FcsMqGx');
	
	app1.getObject('QV4','KxXvL');
	
	app1.getObject('QV3','YUjM');
	
	
	
	
	
	
	
	
	
	
	


	


});

/* Fix added by MW for scrolling issue with selection toolbar. See https://community.qlik.com/thread/142038
$(document).ready(function (e) {
    $('.qvobject').mousemove(function (e) {
     id = $(this).attr('id');
  $('.selections-data-area-ui canvas').css('position', 'fixed')
  $('.selections-data-area-ui canvas').css('top', y+40);
  $('.qv-selection-toolbar').css('z-index', 0)
  });
 
  $('body').scroll(function() {
  y = $('#'+id).offset().top;
  $('.qv-selection-toolbar').css('top', y-40);
  $('.qv-selection-toolbar').css('z-index', 0)
  });
});
*/



