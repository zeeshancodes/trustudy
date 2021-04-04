function updatePreview(){
    var previewFrame = document.getElementById('preview');
    var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
    preview.open();
    preview.write(editor.getValue());
    preview.close();
}
function downloadCode(){
    document.getElementById("download-value").value = editor.getValue();
    document.getElementById("download-form").submit();
    updatePreview();
}
function newWindow(){
    document.getElementById("code-value").value = editor.getValue();
    document.getElementById("new-form").submit();
    updatePreview();
}

var fixed = 140;
function setHeight(h){
    var fheight = h - fixed;
    $("#preview, .CodeMirror-scroll, .output-area").height(fheight);
}
$(document).ready(function(){
    setHeight($(window).height());
});

$(window).resize(function(){
    $(window).bind("resize", function(){ 
        setHeight($(window).height());
    });
});
$(window).trigger('resize');

$(document).ready(function(){
    var textCode = $("#code").val();
    var titleText = textCode.match("<title>(.*)</title>");
    var pageURL = $(location).attr("href");
    $('meta[property="og:title"]').attr("content", titleText[1])
    $('meta[property="og:description"]').attr("content", "See live example at - " + pageURL);

    $("#check").click(function(){
        updatePreview();
    });
    
    $(".hide-right-pane").click(function (){
        $(this).hide();
        $(".show-right-pane").show();
        $("#right-pane").hide();
        $("#left-pane").css("full-screen");
    });
    $(".show-right-pane").click(function (){
        $(this).hide();
        $(".hide-right-pane").show();
        $("#right-pane").show();
        $("#left-pane").removeClass("full-screen");
    });
	
    $("#preview").load(function(){
        $("#preview").contents().find('form').submit(function(e){														
            var str = $.trim($(this).attr("action"));
            if(str != 'https://www.google.com/search'){
                if(!str.match(/^\/examples/) || !str.match(/.php$/)){
                    e.preventDefault();
                    $("#preview").contents().find("body").html('<h3 style="font-family: sans-serif;margin: 20px;padding-left: 40px;line-height: 34px;background: url(/lib/images/error-icon.png) left center no-repeat;">Error: Invalid request. Please try again.</h3>');
                }
            }            
        });
    });
});