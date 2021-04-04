//Colorpicker
function makeGetRequest(ID){
	$.ajax({
		url: "/lib/assets/result.php",
		type: "GET",
		data: { id: ID },
		success: function(data){
		  $("#colors").html(data);
		}  
	});
}
function postHex(){
	var colorValue = $("#hex_code").val();
	$.ajax({
		url: "/lib/assets/result.php",
		type: "GET",
		data: { hex: colorValue },
		success: function(data){
		  $("#colors").html(data);
		}  
	});
}
$(document).ready(function(){
	postHex();
});
