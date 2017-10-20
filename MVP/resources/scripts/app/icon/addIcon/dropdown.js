function Option(className, onClick){
	$(className).click(onClick);
}

function addMenu(){
  $('.add_menu').css('visibility', 'visible');
}

function Dropdown(){
  	this.html = 
		`<div class='dropdown_options'>
          <button class='add_icon'>Add</Button>  
      </div>`

	$('body').append(this.html);
	this.Add = new Option('.add_icon', addMenu);
	this.Refresh = new Option('.refresh_option', function(){console.log('klik');});
	this.Changebg = new Option('.changebg_option', function(){console.log('klik');});
}