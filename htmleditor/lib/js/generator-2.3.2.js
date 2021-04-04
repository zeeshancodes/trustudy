// Copyright (C) 2013 www.tutorialrepublic.com

function filterHTML(strInput){   
    strInput = strInput.replace(new RegExp(['<'],"g"), "&lt;");
    strInput = strInput.replace(new RegExp(['>'],"g"), "&gt;");
    return strInput;  
}
$(function(){
    $(".button-text").keyup(function(){
        var btnText = $(this).val();
        if($("#result a.btn, #result button.btn").length){
            if($("#result a.btn i, #result button.btn i").length){
                var iconCode = $("#result a.btn i, #result button.btn i").clone();
                innerCode = btnText;
                $("#result .btn").html(filterHTML(btnText));
                $("#result .btn").prepend(" ");
                $("#result .btn").prepend(iconCode);
                var btnHTML = $("#result").html();
                $(".button-html").html(filterHTML(btnHTML));
            }
            else{
                $("#result .btn").html(filterHTML(btnText));
                var btnHTML = $("#result").html();
                $(".button-html").html(filterHTML(btnHTML));
            }
        }
        else if($("#result input.btn").length){
            $("#result .btn").attr("value", filterHTML(btnText));
            var btnHTML = $("#result").html();
            $(".button-html").html(filterHTML(btnHTML));
        }
    });
    $(".button-color button").click(function(){
        var btnColor = $(this).attr("value");
        var btnSize = $(".button-size button.active").attr("value");
        var btnState = $(".button-state button.active").attr("value");
        if(btnState == "active" || btnState == "disabled"){
            var className = btnColor + " " + btnSize + " " + btnState;
            $("#result .btn").attr("class", className);
            var btnHTML = $("#result").html();
            $(".button-html").html(filterHTML(btnHTML));
        }
        if(btnState == "normal"){
            var className = btnColor + " " + btnSize;
            $("#result .btn").attr("class", className);
            var btnHTML = $("#result").html();
            $(".button-html").html(filterHTML(btnHTML));
        }
    });
    $(".button-size button").click(function(){
        var btnSize = $(this).attr("value");
        var btnColor = $(".button-color button.active").attr("value");
        var btnState = $(".button-state button.active").attr("value");
        if(btnSize.length){
            if(btnState == "active" || btnState == "disabled"){
                var className = btnColor + " " + btnSize + " " + btnState;
                $("#result .btn").attr("class", className);
                var btnHTML = $("#result").html();
                $(".button-html").html(filterHTML(btnHTML));
            }
            if(btnState == "normal"){
                var className = btnColor + " " + btnSize;
                $("#result .btn").attr("class", className);
                var btnHTML = $("#result").html();
                $(".button-html").html(filterHTML(btnHTML));
            }
        }
        else{
            if(btnState == "active" || btnState == "disabled"){
                var className = btnColor + " " + btnState;
                $("#result .btn").attr("class", className);
                var btnHTML = $("#result").html();
                $(".button-html").html(filterHTML(btnHTML));
            }
            if(btnState == "normal"){
                var className = btnColor;
                $("#result .btn").attr("class", className);
                var btnHTML = $("#result").html();
                $(".button-html").html(filterHTML(btnHTML));
            }
        }
        $("#result .btn").attr("class", className);
        var btnHTML = $("#result").html();
        $(".button-html").html(filterHTML(btnHTML));
    });
    $(".element-type button").click(function(){
        var iconCode = "";
        var currentClass = $("#result .btn").attr("class");
        if($("#result a.btn i").length){
            var iconCode = $("#result a.btn i, #result button.btn i").clone();
        }
        if($("#result a.btn i").length === 0 && $('.include-icon button[value=1]').hasClass("active")){
            if($('.glyph-icon-color .btn[value="white"].active').length){
                var iconName = $(".the-icons li.active i").attr("class");
                iconCode = '<i class="'+iconName+ " " +'icon-white"></i>';
            }
            else{
                var iconName = $(".the-icons li.active i").attr("class");
                iconCode = '<i class="'+iconName+ '"></i>';
            }
        }
        if($("#result a.btn, #result button.btn").length){
            var btnStr = $("#result .btn").text();
            var btnText = $.trim(btnStr);
        }
        else if($("#result input.btn").length){
            var btnStr = $("#result .btn").attr("value");
            var btnText = $.trim(btnStr);
        }
        if($(this).attr("value")=="a"){
            $("#result").empty();
            var btnCode = '<a href="#"' + " " + 'class="' + currentClass + '">' + btnText + '</a>';
            $("#result a").remove();
            $("#result").append(btnCode);
            if(iconCode.length){
                if($('.glyph-icon-position .btn[value="left"].active').length){
                    $("#result .btn").prepend(" ");
                    $("#result .btn").prepend(iconCode);
                }
                if($('.glyph-icon-position .btn[value="right"].active').length){
                    $("#result .btn").append(" ");
                    $("#result .btn").append(iconCode);
                }
            }
            var btnHTML = $("#result").html();
            $(".button-html").html(filterHTML(btnHTML));
        }
        else if($(this).attr("value")=="button"){
            $("#result").empty();
            var btnCode = '<button type="button"' + " " + 'class="' + currentClass + '">' + btnText + '</button>';
            $("#result button").remove();
            $("#result").append(btnCode);
            if(iconCode.length){
                if($('.glyph-icon-position .btn[value="left"].active').length){
                    $("#result .btn").prepend(" ");
                    $("#result .btn").prepend(iconCode);
                }
                if($('.glyph-icon-position .btn[value="right"].active').length){
                    $("#result .btn").append(" ");
                    $("#result .btn").append(iconCode);
                }
            }
            var btnHTML = $("#result").html();
            $(".button-html").html(filterHTML(btnHTML));
        }
        else if($(this).attr("value")=="input"){
            $("#result").empty();
            var btnCode = '<input type="button"' + " " + 'class="' + currentClass + '" value="' + btnText + '">';
            $("#result button").remove();
            $("#result").append(btnCode);
            // Only applicable for input case
            $(".button-html").html(filterHTML(btnCode));
        }
        else if($(this).attr("value")=="submit"){
            $("#result").empty();
            var btnCode = '<input type="submit"' + " " + 'class="' + currentClass + '" value="' + btnText + '">';
            $("#result button").remove();
            $("#result").append(btnCode);
            var btnHTML = $("#result").html();
            $(".button-html").html(filterHTML(btnHTML));
        }
    });
    $(".button-state button").click(function(){
        if($(this).attr("value")=="active"){
            if($("#result a.btn").length){
                if($("#result a.disabled").length){
                    $("#result a.btn").removeClass("disabled");                        
                    $("#result a.btn").addClass("active");
                    var btnHTML = $("#result").html();
                    $(".button-html").html(filterHTML(btnHTML));
                }
                else{
                    $("#result a.btn").addClass("active");
                    var btnHTML = $("#result").html();
                    $(".button-html").html(filterHTML(btnHTML));
                }
            }
            if($("#result button.btn, #result input.btn").length){  
                if($("#result button.disabled, #result input.disabled").length){
                    $("#result button.btn, #result input.btn").removeClass("disabled");
                    //$("#result button.btn, #result input.btn").removeAttr("disabled");
                    $("#result button.btn, #result input.btn").addClass("active");
                    var btnHTML = $("#result").html();
                    $(".button-html").html(filterHTML(btnHTML));
                }
                else{
                    $("#result button.btn, #result input.btn").addClass("active");
                    var btnHTML = $("#result").html();
                    $(".button-html").html(filterHTML(btnHTML));
                }
            }
        }
        if($(this).attr("value")=="disabled"){
            if($("#result a.btn").length){
                if($("#result a.active").length){
                    $("#result a.btn").removeClass("active");
                    $("#result a.btn").addClass("disabled");
                    var btnHTML = $("#result").html();
                    $(".button-html").html(filterHTML(btnHTML));
                }
                else{
                    $("#result a.btn").addClass("disabled");
                    var btnHTML = $("#result").html();
                    $(".button-html").html(filterHTML(btnHTML));
                }
            }
            if($("#result button.btn, #result input.btn")){  
                if($("#result button.active, #result input.active").length){
                    $("#result button.btn, #result input.btn").removeClass("active");
                    $("#result button.btn, #result input.btn").addClass("disabled");
                    //$("#result button.btn, #result input.btn").attr("disabled","disabled");
                    var btnHTML = $("#result").html();
                    $(".button-html").html(filterHTML(btnHTML));
                }
                else{
                    $("#result button.btn, #result input.btn").addClass("disabled");
                    //$("#result button.btn, #result input.btn").attr("disabled","disabled");
                    var btnHTML = $("#result").html();
                    $(".button-html").html(filterHTML(btnHTML));
                }
            }
        }
        if($(this).attr("value")=="normal"){
            if($("#result .btn.active").length){
                $("#result .btn").removeClass("active");
                var btnHTML = $("#result").html();
                $(".button-html").html(filterHTML(btnHTML));
            }
            if($("#result .btn.disabled").length){
                $("#result .btn").removeClass("disabled");
                //$("#result .btn").removeAttr("disabled");
                var btnHTML = $("#result").html();
                $(".button-html").html(filterHTML(btnHTML));
            }
        }
    });
    $(".glyph-icon-color button").click(function(){
        if($(this).attr("value")=="white"){
            if($("#result .btn i").length){
                $("#result .btn i").addClass("icon-white");
                var btnHTML = $("#result").html();
                $(".button-html").html(filterHTML(btnHTML));
            }
        }
        if($(this).attr("value")=="black"){
            if($("#result .btn i.icon-white").length){
                $("#result .btn i").removeClass("icon-white");
                var btnHTML = $("#result").html();
                $(".button-html").html(filterHTML(btnHTML));
            } 
        }
    });
    $(".the-icons li").click(function(){
        $(".the-icons li").removeClass("active");
        $(this).addClass("active");
        if($('.include-icon button[value=1]').hasClass("active")){
            if($("#result .btn i").length){
                var iconClass = $(this).children("i").attr("class");
                if($("#result .btn i.icon-white").length){
                    iconCode = '<i class="'+iconClass+ " " +'icon-white"></i>';
                    $("#result .btn i").remove();                        
                    if($('.glyph-icon-position .btn[value="left"].active').length){
                        $("#result .btn").prepend(iconCode);
                    }
                    if($('.glyph-icon-position .btn[value="right"].active').length){
                        $("#result .btn").append(iconCode);
                        
                    }
                    var btnHTML = $("#result").html();
                    $(".button-html").html(filterHTML(btnHTML));
                }
                else{
                    iconCode = '<i class="'+iconClass+'"></i>';
                    //alert(iconCode);
                    $("#result .btn i").remove();
                    if($('.glyph-icon-position .btn[value="left"].active').length){
                        $("#result .btn").prepend(iconCode);
                    }
                    if($('.glyph-icon-position .btn[value="right"].active').length){
                        $("#result .btn").append(iconCode); 
                    }
                    var btnHTML = $("#result").html();
                    $(".button-html").html(filterHTML(btnHTML));
                }
            }
        }
    });
    $('.include-icon .btn[value="0"]').click(function(){
        if($("#result .btn i").length){
            var btnStr = $("#result .btn").text();
            var btnText = $.trim(btnStr);
            $("#result .btn").html(btnText);
            var btnHTML = $("#result").html();
            $(".button-html").html(filterHTML(btnHTML));
        }
        $(".toggle").hide();
    });
    $('.include-icon .btn[value="1"]').click(function(){
        $(".toggle").show();
        if($('.glyph-icon-color .btn[value="white"].active').length){
            var iconName = $(".the-icons li.active i").attr("class");
            iconCode = '<i class="'+iconName+ " " +'icon-white"></i>';
            if($('.glyph-icon-position .btn[value="left"].active').length){
                $("#result .btn").prepend(" ");
                $("#result .btn").prepend(iconCode);
            }
            if($('.glyph-icon-position .btn[value="right"].active').length){
                $("#result .btn").append(" ");
                $("#result .btn").append(iconCode);
                
            }
            var btnHTML = $("#result").html();
            $(".button-html").html(filterHTML(btnHTML));
        }
        else{
            var iconName = $(".the-icons li.active i").attr("class");
            iconCode = '<i class="'+iconName+ '"></i>';
            if(iconCode.length){
                if($('.glyph-icon-position .btn[value="left"].active').length){
                    $("#result .btn").prepend(" ");
                    $("#result .btn").prepend(iconCode);                    
                }
                if($('.glyph-icon-position .btn[value="right"].active').length){
                    $("#result .btn").append(" ");
                    $("#result .btn").append(iconCode);                        
                }
                var btnHTML = $("#result").html();
                $(".button-html").html(filterHTML(btnHTML));
            }
        }
    });
    $(".glyph-icon-position button").click(function(){
        if($(this).attr("value") == "left"){
            if($("#result .btn i").length){
                var iconCode = $("#result .btn i").clone();
                var btnStr = $("#result .btn").text();
                var btnText = $.trim(btnStr);
                $("#result .btn").html(iconCode);
                $("#result .btn").append(" ");
                $("#result .btn").append(btnText);
                var btnHTML = $("#result").html();
                $(".button-html").html(filterHTML(btnHTML));
            }
            
        }
        if($(this).attr("value") == "right"){
            if($("#result .btn i").length){
                var iconCode = $("#result .btn i").clone();
                var btnStr = $("#result .btn").text();
                var btnText = $.trim(btnStr);
                $("#result .btn").html(iconCode);
                $("#result .btn").prepend(" ");
                $("#result .btn").prepend(btnText);
                var btnHTML = $("#result").html();
                $(".button-html").html(filterHTML(btnHTML));
            }                
        }
        
    });
    $(".the-icons li").each(function(){
        var iconName = $(this).text();
        $(this).attr("title",iconName);
    });
    $(".the-icons li").tooltip();
    
    //Print Button HTML
    $(".print-html").click(function(){
        var btnHTML = $("#result").html();
        alert(filterHTML(btnHTML));
        $(".button-html").html(filterHTML(btnHTML));
    });
});