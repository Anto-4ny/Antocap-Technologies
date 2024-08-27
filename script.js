 //pop ins
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.pop-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});


$(document).ready(function() {
  // Show modal on page load
  $('#offersModal').modal('show');
  
  // Start carousel auto-scroll
  $('#offersCarousel').carousel({
    interval: 3000 // Adjust scroll interval as needed
  });
});
