//Icon events
function iconSetup(){
	var icon_move = 1;
	$('.general_icon').mouseenter(function(){
		var left = $(this).css("left");
		var top = $(this).css("top");
		left = Number(left.replace('px',''))-icon_move;
		top = Number(top.replace('px',''))-icon_move;
		$(this).css("left", (String(left)+"px"));
		$(this).css("top", (String(top)+"px"));
	});

	$('.general_icon').mouseleave(function(){ var left = $(this).css("left");
		var top = $(this).css("top");
		left = Number(left.replace('px',''))+icon_move;
		top = Number(top.replace('px',''))+icon_move;
		$(this).css("left", (String(left)+"px"));
		$(this).css("top", (String(top)+"px"));
	});

	$('.general_icon').mousedown(function(){
		var left = $(this).css("left");
		var top = $(this).css("top");
		left = Number(left.replace('px',''))+icon_move;
		top = Number(top.replace('px',''))+icon_move;
		$(this).css("left", (String(left)+"px"));
		$(this).css("top", (String(top)+"px"));
	});

	$('.general_icon').mouseup(function(){
		var left = $(this).css("left");
		var top = $(this).css("top");
		left = Number(left.replace('px',''))-icon_move;
		top = Number(top.replace('px',''))-icon_move;
		$(this).css("left", (String(left)+"px"));
		$(this).css("top", (String(top)+"px"));
	});
		console.log('icons ready');
}

function loadIcons(){
	icons = JSON.parse(localStorage.getItem("Icons"));
	_.forEach(icons.list, function(ele){
		if(!ele.loaded){
			$('.main_content').append(ele.html);
			$("."+ele.class_name).mouseup(function(){
				window.open(ele.link);
			});
			ele.loaded = true;
		}
	});
	updateIcons(icons);
}

function loadAllIcons(){
	icons = JSON.parse(localStorage.getItem("Icons"));
	_.forEach(icons.list, function(ele){
		$('.main_content').append(ele.html);
		$("."+ele.class_name).mouseup(function(){
			window.open(ele.link);
		});
		ele.loaded = true;
	});
	updateIcons(icons);
}