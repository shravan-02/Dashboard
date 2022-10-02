let boxIcons = document.querySelectorAll('[name="box-icons"]');
for (let i = 0; i < boxIcons.length; i++) {
    boxIcons[i].onclick = function () { 
        boxIcons[i].classList.add('bxs-star')
        boxIcons[i];
    }
}