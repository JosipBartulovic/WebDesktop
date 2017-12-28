if (!localStorage.getItem("Icons")){
    setup = JSON.stringify({"list":[]});
    localStorage.setItem("Icons", setup)
}

function addIcon(iconObj){
    icons = localStorage.getItem("Icons");
    icons = JSON.parse(icons);
    icons.list.push(iconObj);
    icons = JSON.stringify(icons);
    localStorage.setItem("Icons", icons);
}

function updateIcons(icons){
    localStorage.setItem("Icons",JSON.stringify(icons));
}