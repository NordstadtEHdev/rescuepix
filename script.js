function filterGallery(kategorie) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    items.forEach(item => {
        if (kategorie === 'alle' || item.classList.contains(kategorie)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}