// Swiper.js Slider Configuration
const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// AOS.js Initialization
AOS.init();

// Fetch API for Services
const servicesGrid = document.getElementById('services-grid');
fetch('https://6713cc06690bf212c75fcbff.mockapi.io/api/v1/getServices') // Use sua API real
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(service => {
            const serviceCard = `
                <div class="col-md-4" data-aos="fade-up">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">${service.serviceName}</h5>
                            <p class="card-text">${service.serviceDescription}</p>
                        </div>
                    </div>
                </div>
            `;
            servicesGrid.innerHTML += serviceCard;
        });
    })
    .catch(error => {
        servicesGrid.innerHTML = '<p class="text-danger">Erro ao carregar os serviços.</p>';
    });

// Fetch API for Testimonials
const testimonialsGrid = document.getElementById('testimonials-grid');
fetch('https://6713cc06690bf212c75fcbff.mockapi.io/api/v1/getTestimonials') // Use sua API real
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(testimonial => {
            const testimonialCard = `
                <div class="col-md-4" data-aos="fade-up">
                    <div class="card mb-4">
                        <div class="card-body">
                            <img src="https://picsum.photos/150/150" class="img-fluid rounded-circle mb-3" alt="${testimonial.name}">
                            <h5 class="card-title">${testimonial.name}</h5>
                            <p class="card-text">${testimonial.testimonial}</p>
                        </div>
                    </div>
                </div>
            `;
            testimonialsGrid.innerHTML += testimonialCard;
        });
    })
    .catch(error => {
        testimonialsGrid.innerHTML = '<p class="text-danger">Erro ao carregar os testemunhos.</p>';
    });

// EmailJS for Contact Form
const contactForm = document.getElementById('contact-form');
const messageStatus = document.getElementById('message-status');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validar o formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        messageStatus.innerHTML = '<p class="text-danger">Por favor, preencha todos os campos obrigatórios.</p>';
        return;
    }

    // Enviar o formulário via EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => {
            messageStatus.innerHTML = '<p class="text-success">Mensagem enviada com sucesso!</p>';
            contactForm.reset();
        })
        .catch(() => {
            messageStatus.innerHTML = '<p class="text-danger">Erro ao enviar a mensagem. Tente novamente mais tarde.</p>';
        });
});
