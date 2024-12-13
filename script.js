document.addEventListener("DOMContentLoaded", function () {
    const blurredItems = document.querySelectorAll('.blurred');
    blurredItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            item.style.filter = 'none';
            item.style.pointerEvents = 'auto';
        });
        item.addEventListener('mouseout', function () {
            item.style.filter = 'blur(5px)';
            item.style.pointerEvents = 'none';
        });
    });
});
