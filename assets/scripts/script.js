document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.hamburger');
  const content = document.getElementById('hamburgermenu');

  button.addEventListener('click', jumpHandler);

  function jumpHandler() {
    if (content.style.display === 'flex') {
      content.style.display = 'none';
    } else {
      content.style.display = 'flex';
    }
  }
});

function scrollCarousel(direction) {
    const container = document.querySelector('.team-grid');
    const scrollAmount = 260; // Adjust as needed
    const currentScrollPosition = container.scrollLeft;

    if (direction === 'right') {
        container.scrollTo({
            left: currentScrollPosition + scrollAmount,
            behavior: 'smooth',
        });
    } else if (direction === 'left') {
        container.scrollTo({
            left: currentScrollPosition - scrollAmount,
            behavior: 'smooth',
        });
    }
}