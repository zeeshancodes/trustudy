//Title Length Calculator
function updateTitle(){
	var titleText = $(".title-text").val();
	var titleLength = $(".title-text").val().length;
	var leftChar = 70 - titleLength;
	if(leftChar >= 0){
		$(".title-left-char").text(leftChar);
		$(".title-markup span").text(titleText);
		//$(".probable-rendering h3 a").text(titleText);
	}
}

//Meta Length Calculator
function updateMeta(){
	var metaText = $(".meta-text").val();
	var metaLength = $(".meta-text").val().length;
	var leftChar = 160 - metaLength;
	if(leftChar >= 0){
		$(".meta-left-char").text(leftChar);
		$(".meta-markup span").text(metaText);
	}
}

//Meta Update Function
$(document).ready(function(){        
	updateTitle();
	updateMeta();
	$(".title-text").keyup(function(){
		updateTitle();
	});
	$(".meta-text").keyup(function(){
		updateMeta();
	});
});