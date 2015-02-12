
$("body").hide();
$("body").fadeIn(1000);

$(document).ready(function(){
	var colors = ["#2ECCFA","#CCCCCC","#F841E3","#18DA12", "#EEEE19", "#A337F0", "#EE2A4B", "#424146", "#FF8000"];           
	var rand = Math.floor(Math.random()*colors.length);           
	$('#controls-wrapper').css("background-color", colors[rand]);
	$('html, .circle, .cd-timeline-img.cd-picture').css("background", colors[rand]);
	$('h2, h3, h5, section a, .ss-form-title').css("color", colors[rand]);
});