function toggleOverlay(element) {
    var overlay = element.querySelector('.overlay');
    if (overlay.style.display === 'none' || overlay.style.display === '') {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

function closePopUp(event) {
    event.stopPropagation();
    var overlay = event.target.closest('.overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}