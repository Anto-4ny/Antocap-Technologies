
// Contact form functionality
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const status = document.createElement('p');
        status.classList.add('form-status');
        form.appendChild(status);

        fetch('send-email.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.status === 200) {
                status.innerHTML = "Thank you! Your message has been sent.";
                status.style.color = 'green';
                form.reset();
            } else {
                return response.text().then(text => { throw new Error(text) });
            }
        })
        .catch(error => {
            status.innerHTML = error.message;
            status.style.color = 'red';
        });
    });
});



function redirectToContactUs() {
    window.location.href = "contact-us.html";
    }
        
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
