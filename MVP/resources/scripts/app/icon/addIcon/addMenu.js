function addMenuSetup(){
	var addMenu = {
		html: `
			<div class='add_menu' style='background-color:white; position:absolute;'>
				<input class='input_link' /> Link
				<br>
				<input class='input_letter' maxlength='1' /> Letter
				<br>
				<select class='input_color'>
					<option>red</option>
					<option>green</option>
					<option>blue</option>
				</select>
				<br />
				<button class='add_button'>Add</buttton>
				<button class='cancel_button'>Cancel</button>
			</div>
		`
	}

	$('.main_content').html(addMenu.html);
	
	$('.add_menu').css("visibility", "hidden");

	$('.add_button').click(function(){
		if($('.input_letter').val() && $('.input_link').val()){
			console.log($('.input_color').val());
			ic = new Icon($('.input_color').val(), $('.input_letter').val(), $('.input_link').val(), "ikona");
			addIcon(ic);
			$('.add_menu').css("visibility", "hidden");
		}
	});

	$('.cancel_button').click(function(){
		$('.add_menu').css("visibility", "hidden");
	});
	
}