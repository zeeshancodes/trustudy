// Copyright (C) 2013 www.tutorialrepublic.com

function customRadio(radioName){
    var radioButton = $('input[name="'+ radioName +'"]');
    $(radioButton).each(function(){
        $(this).wrap( "<span class='custom-radio'></span>" );
        if($(this).is(':checked')){
            $(this).parent().addClass("selected");
        }
    });
    $(radioButton).click(function(){
        if($(this).is(':checked')){
            $(this).parent().addClass("selected");
        }
        $(radioButton).not(this).each(function(){
            $(this).parent().removeClass("selected");
        });
    });
}
function customCheckbox(checkboxName){
    var checkBox = $('input[name="'+ checkboxName +'"]');
    $(checkBox).each(function(){
        $(this).wrap( "<span class='custom-checkbox'></span>" );
        if($(this).is(':checked')){
            $(this).parent().addClass("selected");
        }
    });
    $(checkBox).click(function(){
        $(this).parent().toggleClass("selected");
    });
}
function setColor(){
    // Getting current color values
    var btnSelector = "";
    var resultButton = $("#result").children("a, input, button");
    var btnClass = resultButton.attr("class");
    var strTrim = $.trim(btnClass);
    var btnSelector = "." + strTrim.split(" ").join('.');
    
    //alert(btnClass);
    if(resultButton.hasClass("btn-mini")){
        var classStr = btnClass.replace(" btn-mini","");
        var strTrim = $.trim(classStr);
        var btnSelector = "." + strTrim.split(" ").join('.');
    }
    if(resultButton.hasClass("btn-small")){
        var classStr = btnClass.replace(" btn-small","");
        var strTrim = $.trim(classStr);
        var btnSelector = "." + strTrim.split(" ").join('.');
    }
    if(resultButton.hasClass("btn-large")){
        var classStr = btnClass.replace(" btn-large","");
        var strTrim = $.trim(classStr);
        var btnSelector = "." + strTrim.split(" ").join('.');
    }
    
    //alert(btnSelector);
    
    // Default button style
    if(btnSelector == ".btn"){
        $("#textColor").val("333333");
        $("#bgColor").val("F5F5F5");
        $("#topColor").val("FFFFFF");
        $("#bottomColor").val("E6E6E6");            
        $("#borderTopColor").val("CCCCCC");
        $("#borderHrColor").val("CCCCCC");
        $("#borderBottomColor").val("b3b3b3");
    }
    if(btnSelector == ".btn.active"){
        $("#textColor").val("333333");
        $("#bgColor").val("E6E6E6");
        $("#topColor").val("E6E6E6");
        $("#bottomColor").val("E6E6E6");            
        $("#borderTopColor").val("CCCCCC");
        $("#borderHrColor").val("CCCCCC");
        $("#borderBottomColor").val("b3b3b3");
    }
    if(btnSelector == ".btn.disabled"){
        $("#textColor").val("333333");
        $("#bgColor").val("E6E6E6");
        $("#topColor").val("E6E6E6");
        $("#bottomColor").val("E6E6E6");            
        $("#borderTopColor").val("CCCCCC");
        $("#borderHrColor").val("CCCCCC");
        $("#borderBottomColor").val("b3b3b3");
    }
    
    // Primary button style
    if(btnSelector == ".btn.btn-primary"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("006DCC");
        $("#topColor").val("0088CC");
        $("#bottomColor").val("0044CC");                    
        $("#borderTopColor").val("0062b7");
        $("#borderHrColor").val("005cb7");
        $("#borderBottomColor").val("005299");
    }
    if(btnSelector == ".btn.btn-primary.active"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("0044CC");
        $("#topColor").val("0044CC");
        $("#bottomColor").val("0044CC");
        $("#borderTopColor").val("0062b7");
        $("#borderHrColor").val("005cb7");
        $("#borderBottomColor").val("005299");
    }
    if(btnSelector == ".btn.btn-primary.disabled"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("0044CC");
        $("#topColor").val("0044CC");
        $("#bottomColor").val("0044CC");
        $("#borderTopColor").val("0062b7");
        $("#borderHrColor").val("005cb7");
        $("#borderBottomColor").val("005299");
    }
    
    // Info button style
    if(btnSelector == ".btn.btn-info"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("49AFCD");
        $("#topColor").val("5BC0DE");
        $("#bottomColor").val("2F96B4");                    
        $("#borderTopColor").val("429db8");
        $("#borderHrColor").val("3b97b2");
        $("#borderBottomColor").val("37839a");
    }
    if(btnSelector == ".btn.btn-info.active"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("2F96B4");
        $("#topColor").val("2F96B4");
        $("#bottomColor").val("2F96B4");                    
        $("#borderTopColor").val("429db8");
        $("#borderHrColor").val("3b97b2");
        $("#borderBottomColor").val("37839a");
    }
    if(btnSelector == ".btn.btn-info.disabled"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("2F96B4");
        $("#topColor").val("2F96B4");
        $("#bottomColor").val("2F96B4");                    
        $("#borderTopColor").val("429db8");
        $("#borderHrColor").val("3b97b2");
        $("#borderBottomColor").val("37839a");
    }
    
    
    // Success button style
    if(btnSelector == ".btn.btn-success"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("5BB75B");
        $("#topColor").val("62C462");
        $("#bottomColor").val("51A351");                    
        $("#borderTopColor").val("52a452");
        $("#borderHrColor").val("4e9c4e");
        $("#borderBottomColor").val("448944");
    }
    if(btnSelector == ".btn.btn-success.active"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("51A351");
        $("#topColor").val("51A351");
        $("#bottomColor").val("51A351");                    
        $("#borderTopColor").val("52a452");
        $("#borderHrColor").val("4e9c4e");
        $("#borderBottomColor").val("448944");
    }
    if(btnSelector == ".btn.btn-success.disabled"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("51A351");
        $("#topColor").val("51A351");
        $("#bottomColor").val("51A351");                    
        $("#borderTopColor").val("52a452");
        $("#borderHrColor").val("4e9c4e");
        $("#borderBottomColor").val("448944");
    }
    
    // Warning button style
    if(btnSelector == ".btn.btn-warning"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("FAA732");
        $("#topColor").val("FBB450");
        $("#bottomColor").val("F89406");                    
        $("#borderTopColor").val("e1962d");
        $("#borderHrColor").val("e08e1c");
        $("#borderBottomColor").val("bb7d25");
    }
    if(btnSelector == ".btn.btn-warning.active"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("F89406");
        $("#topColor").val("F89406");
        $("#bottomColor").val("F89406");                    
        $("#borderTopColor").val("e1962d");
        $("#borderHrColor").val("e08e1c");
        $("#borderBottomColor").val("bb7d25");
    }
    if(btnSelector == ".btn.btn-warning.disabled"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("F89406");
        $("#topColor").val("F89406");
        $("#bottomColor").val("F89406");                    
        $("#borderTopColor").val("e1962d");
        $("#borderHrColor").val("e08e1c");
        $("#borderBottomColor").val("bb7d25");
    }
    
    // Danger button style
    if(btnSelector == ".btn.btn-danger"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("DA4F49");
        $("#topColor").val("EE5F5B");
        $("#bottomColor").val("BD362F");                    
        $("#borderTopColor").val("c44742");
        $("#borderHrColor").val("ba3e39");
        $("#borderBottomColor").val("a33b37");
    }
    if(btnSelector == ".btn.btn-danger.active"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("BD362F");
        $("#topColor").val("BD362F");
        $("#bottomColor").val("BD362F");                    
        $("#borderTopColor").val("c44742");
        $("#borderHrColor").val("ba3e39");
        $("#borderBottomColor").val("a33b37");
    }
    if(btnSelector == ".btn.btn-danger.disabled"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("BD362F");
        $("#topColor").val("BD362F");
        $("#bottomColor").val("BD362F");                    
        $("#borderTopColor").val("c44742");
        $("#borderHrColor").val("ba3e39");
        $("#borderBottomColor").val("a33b37");
    }
    
    // Inverse button style
    if(btnSelector == ".btn.btn-inverse"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("363636");
        $("#topColor").val("444444");
        $("#bottomColor").val("222222");                    
        $("#borderTopColor").val("303030");
        $("#borderHrColor").val("2e2e2e");
        $("#borderBottomColor").val("282828");
    }
    if(btnSelector == ".btn.btn-inverse.active"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("222222");
        $("#topColor").val("222222");
        $("#bottomColor").val("222222");                    
        $("#borderTopColor").val("303030");
        $("#borderHrColor").val("2e2e2e");
        $("#borderBottomColor").val("282828");
    }
    if(btnSelector == ".btn.btn-inverse.disabled"){
        $("#textColor").val("ffffff");
        $("#bgColor").val("222222");
        $("#topColor").val("222222");
        $("#bottomColor").val("222222");                    
        $("#borderTopColor").val("303030");
        $("#borderHrColor").val("2e2e2e");
        $("#borderBottomColor").val("282828");
    }
    // Setting background of color selector
    $(".custom-button-color input").each(function(){
        var colorValue = $(this).val();
        //alert(colorValue);
        $(this).next(".color-slelector").css("background", "#"+colorValue);
    });
    
    var txtColor = $("#textColor").val();
    var bgColor = $("#bgColor").val();
    var topColor = $("#topColor").val();
    var bottomColor = $("#bottomColor").val();            
    var borderTopColor = $("#borderTopColor").val();
    var borderHrColor = $("#borderHrColor").val();
    var borderBottomColor = $("#borderBottomColor").val();
    
    var btnBg = "background-color: " + "#" + bgColor + ";";            
    var btnGradient = "background-image: linear-gradient(to bottom, " + "#" + topColor + "," + " " + "#" + bottomColor + ");";
    var btnBgPosition = "background-position: 0 0;";
    var btnText = "color: " + "#" + txtColor + ";";
    var btnBorder = "border-color: " + "#" + borderTopColor + " " + "#" + borderHrColor + " " + "#" + borderBottomColor +";";
    
    var btnBgHover = "background-color: " + "#" + bottomColor + ";";
    var btnGradientHover = "background-image: linear-gradient(to bottom, " + "#" + bottomColor + "," + " " + "#" + bottomColor + ");";
    
    // Setting CSS
    var resultButton = $("#result").find("a, input, button");
    
    if(resultButton.hasClass("active") || resultButton.hasClass("disabled")){
        //alert(btnSelector);
        var btnStyle = "<style type='text/css'>" + "#result" + " " + btnSelector + "," + " " + "#result" + " " + btnSelector + ":hover {" + btnText + " " + btnBg + " " + btnGradient + " " + btnBgPosition + " " + btnBorder + "}</style>";
        
        var btnCSS = btnSelector + "," + " " + "\n" + btnSelector + ":hover {\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnText + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnBg + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnGradient + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+btnBgPosition + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnBorder + "\n}";
        
        $("style").remove();
        $(btnStyle).appendTo("head");
        $(".button-css").empty();
        $(".button-css").html(btnCSS);
    }
    else{
        //alert(btnSelector);
        var btnStyle = "<style type='text/css'>" + "#result" + " " + btnSelector + " {" + btnText + " " + btnBg + " " + btnGradient + " " + btnBorder + "}" + "#result" + " " + btnSelector + ":hover {" + btnText + " " + btnBgHover + " " + btnGradientHover + " " + btnBorder + "}" + "</style>";
    
        var btnCSS = btnSelector + " {\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnText + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnBg + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnGradient + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnBorder + "\n}\n" + btnSelector + ":hover {\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnText + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnBgHover + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnGradientHover + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnBorder + "\n}";
        
        $("style").remove();
        $(btnStyle).appendTo("head");
        $(".button-css").empty();
        $(".button-css").html(btnCSS);
    }
}
$(document).ready(function(){
    // Enable custom radio
    customRadio("color-option");
    customCheckbox("border-all");
    setColor();
    
    // Show hide border options
    $('.border-all input[type="checkbox"]').each(function(){
        if($(this).prop('checked') == true){ 
            var borderTopColor = $("#borderTopColor").val();
            $("#borderHrColor").val(borderTopColor);
            $("#borderBottomColor").val(borderTopColor);
            $("#borderHrColor, #borderBottomColor").next(".color-slelector").css("background", "#"+borderTopColor);
            $(".border-color-separate").hide();
            $(this).parents(".controls").prev().text("Border Color");
        }
        if($(this).prop('checked') == false){
            $(".border-color-separate").show();
            $(this).parents(".controls").prev().text("Border Top Color");
        }
    });
    $('.border-all, .border-all input[type="checkbox"]').click(function(){
        if($(this).prop('checked') == true){ 
            var borderTopColor = $("#borderTopColor").val();
            $("#borderHrColor").val(borderTopColor);
            $("#borderBottomColor").val(borderTopColor);
            $("#borderHrColor, #borderBottomColor").next(".color-slelector").css("background", "#"+borderTopColor);
            $(".border-color-separate").hide();
            $(this).parents(".controls").prev().text("Border Color");
        }
        if($(this).prop('checked') == false){
            $(".border-color-separate").show();
            $(this).parents(".controls").prev().text("Border Top Color");
        }
    });
    
    // Enable Zclip
    $("a#copyHTML").zclip({
        path:'lib/js/ZeroClipboard.swf',
        copy:function(){return $('#htmlCode').text();},
        afterCopy:function(){
            $("#htmlAlert").fadeIn("fast").delay(500).queue(function() {
                $(this).fadeOut("fast");
                $(this).dequeue();
            });  
        }
    });
    $("a#copyCSS").zclip({
        path:'lib/js/ZeroClipboard.swf',
        copy:function(){return $('#cssCode').text();},
        afterCopy:function(){
            $("#cssAlert").fadeIn("fast").delay(500).queue(function() {
                $(this).fadeOut("fast");
                $(this).dequeue();
            });  
        }
    });
    
    // Show hide icon option
    $('.element-type button[value="a"]').click(function(){
        $("#iconOption").show();
        $(".include-icon button").each(function(){
            if($('button[value="1"]').hasClass("active")){
                $(".toggle").show();
            }
            if($('button[value="0"]').hasClass("active")){
                $(".toggle").hide();
            }
        });
    });
    $('.element-type button[value="button"]').click(function(){
        $("#iconOption").show();
        $(".include-icon button").each(function(){
            if($('button[value="1"]').hasClass("active")){
                $(".toggle").show();
            }
            if($('button[value="0"]').hasClass("active")){
                $(".toggle").hide();
            }
        });
    });
    $('.element-type button[value="input"]').click(function(){
        $("#iconOption, .toggle").hide();
    });
    
    // Show hide color option
    $('.button-color-option input[type="radio"]').each(function(){
        if($(this).is(':checked')){
            if($(this).attr("value")=="bootstrap"){
                $(".custom-button-color").hide();
                $(".bootstrap-inbuilt-style").show();
                $(".wrapper").removeClass("adjust");
                $("#cssBox").hide();
                $("style").remove();
            }
            if($(this).attr("value")=="custom"){
                $(".bootstrap-inbuilt-style").hide();
                $(".custom-button-color").show();
                $(".wrapper").addClass("adjust");
                $("#cssBox").show();
                setColor();
            }
        }
    });
    $('.button-color-option input[type="radio"]').click(function(){
        if($(this).attr("value")=="bootstrap"){
            $(".custom-button-color").hide();                
            $(".bootstrap-inbuilt-style").show();
            $(".wrapper").removeClass("adjust");
            $("#cssBox").hide();
            $("style").remove();
        }
        if($(this).attr("value")=="custom"){
            $(".bootstrap-inbuilt-style").hide();
            $(".custom-button-color").show();
            $(".wrapper").addClass("adjust");
            $("#cssBox").show();
            setColor();
        }
    });
    
    var colorInput = $('#textColor, #topColor, #bottomColor, #bgColor, #borderTopColor, #borderHrColor, #borderBottomColor');
    $(colorInput).each(function(){
        var defautColor = $(this).val();
        //alert(defautColor);
        $(this).ColorPicker({
            color: defautColor,
            onSubmit: function(hsb, hex, rgb, el) {
                $(el).val(hex);
                $(el).ColorPickerHide();
            }
        })
        .bind('keyup', function(){
            $(this).ColorPickerSetColor(this.value);
        });
    });
    
    $(".colorpicker_submit").click(function(){
        $(".custom-button-color input").each(function(){
            var colorValue = $(this).val();
            //alert(colorValue);
            $(this).next(".color-slelector").css("background", "#"+colorValue);
            $(this).attr("value", colorValue);
        });
    });
    var colorSelector = $('#colorSelector1, #colorSelector2, #colorSelector3, #colorSelector4, #colorSelector5, #colorSelector6, #colorSelector7');
    $(colorSelector).each(function(){
        var selectorColor = $(this).prev().val();
        $(this).ColorPicker({
            color: selectorColor,
            onSubmit: function(hsb, hex, rgb, el) {
                $(el).val(hex);
                $(el).ColorPickerHide();
                $(el).css("background", "#"+hex);
                $(el).prev().val(hex);
            }
        }).bind('click', function(){
            var selectorColor = $(this).prev().val();
            $(this).ColorPickerSetColor(selectorColor);
        });
    });
    
    // Inserting CSS
    $('.colorpicker_submit, .button-state button, .border-all input[type="checkbox"]').click(function(){
        if($('.button-color-option input[value="custom"]').is(':checked')){
            
            // Getting current color values
            var btnSelector = "";
            var resultButton = $("#result").children("a, input, button");
            var btnClass = resultButton.attr("class");
            var strTrim = $.trim(btnClass);
            var btnSelector = "." + strTrim.split(" ").join('.');
            
            //alert(btnClass);
            if(resultButton.hasClass("btn-mini")){
                var classStr = btnClass.replace(" btn-mini","");
                var strTrim = $.trim(classStr);
                var btnSelector = "." + strTrim.split(" ").join('.');
            }
            if(resultButton.hasClass("btn-small")){
                var classStr = btnClass.replace(" btn-small","");
                var strTrim = $.trim(classStr);
                var btnSelector = "." + strTrim.split(" ").join('.');
            }
            if(resultButton.hasClass("btn-large")){
                var classStr = btnClass.replace(" btn-large","");
                var strTrim = $.trim(classStr);
                var btnSelector = "." + strTrim.split(" ").join('.');
            }
            
            //alert(btnSelector);

            $('.border-all input[type="checkbox"]').each(function(){
                if($(this).is(':checked')){
                    var borderTopColor = $("#borderTopColor").val();
                    $("#borderHrColor").val(borderTopColor);
                    $("#borderBottomColor").val(borderTopColor);
                    $("#borderHrColor, #borderBottomColor").next(".color-slelector").css("background", "#"+borderTopColor);
                }
            });
            
            var txtColor = $("#textColor").val();
            var bgColor = $("#bgColor").val();
            var topColor = $("#topColor").val();
            var bottomColor = $("#bottomColor").val();            
            var borderTopColor = $("#borderTopColor").val();
            var borderHrColor = $("#borderHrColor").val();
            var borderBottomColor = $("#borderBottomColor").val();
            
            var btnBg = "background-color: " + "#" + bgColor + ";";            
            var btnGradient = "background-image: linear-gradient(to bottom, " + "#" + topColor + "," + " " + "#" + bottomColor + ");";
            var btnBgPosition = "background-position: 0 0;";
            var btnText = "color: " + "#" + txtColor + ";";
            var btnBorder = "border-color: " + "#" + borderTopColor + " " + "#" + borderHrColor + " " + "#" + borderBottomColor +";";
            
            var btnBgHover = "background-color: " + "#" + bottomColor + ";";
            var btnGradientHover = "background-image: linear-gradient(to bottom, " + "#" + bottomColor + "," + " " + "#" + bottomColor + ");";
            
            // Setting CSS
            var resultButton = $("#result").find("a, input, button");
            
            if(resultButton.hasClass("active") || resultButton.hasClass("disabled")){
                //alert(btnSelector);
                var btnStyle = "<style type='text/css'>" + "#result" + " " + btnSelector + "," + " " + "#result" + " " + btnSelector + ":hover {" + btnText + " " + btnBg + " " + btnGradient + " " + btnBgPosition + " " + btnBorder + "}</style>";
            
                var btnCSS = btnSelector + "," + " " + "\n" + btnSelector + ":hover {\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnText + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnBg + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnGradient + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+btnBgPosition + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnBorder + "\n}";
                
                $("style").remove();
                $(btnStyle).appendTo("head");
                $(".button-css").empty();
                $(".button-css").html(btnCSS);
            }
            else{
                //alert(btnSelector);
                var btnStyle = "<style type='text/css'>" + "#result" + " " + btnSelector + " {" + btnText + " " + btnBg + " " + btnGradient + " " + btnBorder + "}" + "#result" + " " + btnSelector + ":hover {" + btnText + " " + btnBgHover + " " + btnGradientHover + " " + btnBorder + "}" + "</style>";
            
                var btnCSS = btnSelector + " {\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnText + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnBg + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnGradient + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnBorder + "\n}\n" + btnSelector + ":hover {\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnText + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnBgHover + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnGradientHover + "\n" + "&nbsp;&nbsp;&nbsp;&nbsp;"+ btnBorder + "\n}";
                
                $("style").remove();
                $(btnStyle).appendTo("head");
                $(".button-css").empty();
                $(".button-css").html(btnCSS);
            }
        }
    });
})