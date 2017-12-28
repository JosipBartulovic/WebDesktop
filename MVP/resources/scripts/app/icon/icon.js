
function Icon(colour, letter, link, name){
	this.html = "<div class = 'general_icon icon_{0} icon_{1}'>{2}</div>".replace("{0}",colour).replace("{1}",name).replace("{2}",letter);
	this.class_name = "icon_{0}".replace("{0}", name);
	this.link = link;
	this.loaded = false;
}

