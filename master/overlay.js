$("#videowrap").append("<div id='VideoOverlay' class='fadein'><button class='btn btn-sm btn-default OLB' id='fs-vid-button'>Fullscreen</button></div>");
$('#videowrap').hover(function(){
    $('#VideoOverlay').css({
        'opacity':'1',
        'display':'block',
    });
},function(){
    $('#VideoOverlay').css({
        'opacity':'0',
        'display':'none',
    });
});

$("#VideoOverlay").append($("#voteskip"));
$("#VideoOverlay").append($("#mediarefresh"));

var requestFullscreen = function (ele) {
	if (ele.requestFullscreen) {
		ele.requestFullscreen();
	} else if (ele.webkitRequestFullscreen) {
		ele.webkitRequestFullscreen();
	} else if (ele.mozRequestFullScreen) {
		ele.mozRequestFullScreen();
	} else if (ele.msRequestFullscreen) {
		ele.msRequestFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};

var exitFullscreen = function () {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};




var fsVidButton = document.getElementById('fs-vid-button');
var video = document.getElementById('videowrap');

fsVidButton.addEventListener('click', function(e) {
	e.preventDefault();
	requestFullscreen(videowrap);
});
