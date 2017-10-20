$('body').ready(function(){
    $(".add_shortcut").click(function(){
        chrome.tabs.getSelected(function(arg2){
            addIcon(new Icon("blue", $('.input_letter').val(), arg2.url, "Chmar"));
        });
    });
});

