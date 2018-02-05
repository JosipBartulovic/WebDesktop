var icon1 = document.getElementsByClassName('icon')[0];
icon1.addEventListener('click', function(){
    icon1.className += 'icon__click';
});

document.getElementsByClassName('icon')[0].addEventListener(
    'click',
    () => {
        window.open('https://www.youtube.com/');
    }
);