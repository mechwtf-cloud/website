"/* ============================================
   VELOCITY MOTORS - SCRIPT.JS
   Premium Car Dealership Website
   ============================================ */

// Car Data
const carsData = [
    {
        id: \"1\",
        name: \"Lamborghini Huracán EVO\",
        brand: \"Lamborghini\",
        price: 261274,
        year: 2024,
        horsepower: 631,
        acceleration: \"2.9s\",
        topSpeed: \"325 km/h\",
        engine: \"5.2L V10\",
        fuelType: \"Petrol\",
        transmission: \"Automatic\",
        image: \"https://images.unsplash.com/photo-1767907571229-01cf4ba03590?crop=entropy&cs=srgb&fm=jpg&q=85\",
        gallery: [
            \"https://images.unsplash.com/photo-1767907571229-01cf4ba03590?crop=entropy&cs=srgb&fm=jpg&q=85\",
            \"https://images.unsplash.com/photo-1544636331-e26879cd4d9b?crop=entropy&cs=srgb&fm=jpg&q=85\",
            \"https://images.unsplash.com/photo-1636879577841-529c0e23a9af?crop=entropy&cs=srgb&fm=jpg&q=85\"
        ],
        features: [\"Carbon Ceramic Brakes\", \"Alcantara Interior\", \"Sport Exhaust\", \"Rear Camera\", \"Navigation System\", \"Leather Seats\"],
        description: \"The Huracán EVO represents the natural evolution of the most successful V10-powered Lamborghini ever.\"
    },
    {
        id: \"2\",
        name: \"Ferrari 488 GTB\",
        brand: \"Ferrari\",
        price: 330000,
        year: 2024,
        horsepower: 661,
        acceleration: \"3.0s\",
        topSpeed: \"330 km/h\",
        engine: \"3.9L V8 Twin-Turbo\",
        fuelType: \"Petrol\",
        transmission: \"Automatic\",
        image: \"https://images.unsplash.com/photo-1678126631010-492fcff469dd?crop=entropy&cs=srgb&fm=jpg&q=85\",
        gallery: [
            \"https://images.unsplash.com/photo-1678126631010-492fcff469dd?crop=entropy&cs=srgb&fm=jpg&q=85\",
            \"https://images.unsplash.com/photo-1648596811810-56bdc2a4222c?crop=entropy&cs=srgb&fm=jpg&q=85\",
            \"https://images.unsplash.com/photo-1583121274602-3e2820c69888?crop=entropy&cs=srgb&fm=jpg&q=85\"
        ],
        features: [\"Carbon Fiber Package\", \"Racing Seats\", \"Sport Exhaust\", \"Parking Sensors\", \"Premium Sound\", \"Adaptive Suspension\"],
        description: \"The Ferrari 488 GTB represents a quantum leap in the development of the mid-rear-engined sports car.\"
    },
    {
        id: \"3\",
        name: \"Porsche 911 Turbo S\",
        brand: \"Porsche\",
        price: 230600,
        year: 2024,
        horsepower: 640,
        acceleration: \"2.6s\",
        topSpeed: \"330 km/h\",
        engine: \"3.8L Flat-6 Twin-Turbo\",
        fuelType: \"Petrol\",
        transmission: \"Automatic\",
        image: \"https://images.unsplash.com/photo-1704325053114-1b9750ca7bec?crop=entropy&cs=srgb&fm=jpg&q=85\",
        gallery: [
            \"https://images.unsplash.com/photo-1704325053114-1b9750ca7bec?crop=entropy&cs=srgb&fm=jpg&q=85\",
            \"https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?crop=entropy&cs=srgb&fm=jpg&q=85\",
            \"https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?crop=entropy&cs=srgb&fm=jpg&q=85\"
        ],
        features: [\"PCCB Brakes\", \"Sport Chrono Package\", \"Bose Sound System\", \"Adaptive Cruise\", \"Matrix LED\", \"Sport Seats Plus\"],
        description: \"The 911 Turbo S continues the legacy of being the ultimate everyday supercar with unmatched performance.\"
    },
    {
        id: \"4\",
        name: \"BMW M4 Competition\",
        brand: \"BMW\",
        price: 84900,
        year: 2024,
        horsepower: 503,
        acceleration: \"3.8s\",
        topSpeed: \"290 km/h\",
        engine: \"3.0L I6 Twin-Turbo\",
        fuelType: \"Petrol\",
        transmission: \"Automatic\",
        image: \"https://images.unsplash.com/photo-1617531653332-bd46c24f2068?crop=entropy&cs=srgb&fm=jpg&q=85\",
        gallery: [
            \"https://images.unsplash.com/photo-1617531653332-bd46c24f2068?crop=entropy&cs=srgb&fm=jpg&q=85\",
            \"https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=srgb&fm=jpg&q=85\",
            \"https://images.unsplash.com/photo-1580273916550-e323be2ae537?crop=entropy&cs=srgb&fm=jpg&q=85\"
        ],
        features: [\"M Carbon Bucket Seats\", \"Harman Kardon\", \"M Drive Professional\", \"Head-Up Display\", \"Parking Assistant\", \"M Sport Differential\"],
        description: \"The BMW M4 Competition combines everyday usability with track-ready performance.\"
    },
    {
        id: \"5\",
        name: \"Mercedes-AMG GT R\",
        brand: \"Mercedes\",
        price: 187000,
        year: 2024,
        horsepower: 577,
        acceleration: \"3.5s\",
        topSpeed: \"318 km/h\",
        engine: \"4.0L V8 Biturbo\",
        fuelType: \"Petrol\",
        transmission: \"Automatic\",
        image: \"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?crop=entropy&cs=srgb&fm=jpg&q=85\",
        gallery: [
            \"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?crop=entropy&cs=srgb&fm=jpg&q=85\",
            \"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?crop=entropy&cs=srgb&fm=jpg&q=85\",
            \"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?crop=entropy&cs=srgb&fm=jpg&q=85\"
        ],
        features: [\"AMG Track Pace\", \"Carbon Fiber Roof\", \"AMG Performance Exhaust\", \"Burmester Sound\", \"Active Aero\", \"Race Mode\"],
        description: \"Born on the racetrack, the AMG GT R is the pinnacle of Mercedes-AMG engineering excellence.\"
    },
    {
        id: \"6\",
        name: \"Ferrari F8 Tributo\",
        brand: \"Ferrari\",
        price: 276550,
        year: 2024,
        horsepower: 710,
        acceleration: \"2.9s\",
        topSpeed: \"340 km/h\",
        engine: \"3.9L V8 Twin-Turbo\",
        fuelType: \"Petrol\",
        transmission: \"Automatic\",
        image: \"https://images.unsplash.com/photo-1592198084033-aade902d1aae?crop=entropy&cs=srgb&fm=jpg&q=85\",
        gallery: [
            \"https://images.unsplash.com/photo-1592198084033-aade902d1aae?crop=entropy&cs=srgb&fm=jpg&q=85\",
            \"https://images.unsplash.com/photo-1583121274602-3e2820c69888?crop=entropy&cs=srgb&fm=jpg&q=85\",
            \"https://images.unsplash.com/photo-1678126631010-492fcff469dd?crop=entropy&cs=srgb&fm=jpg&q=85\"
        ],
        features: [\"Carbon Fiber Exterior\", \"Full Electric Seats\", \"JBL Premium Audio\", \"Front Lift System\", \"Racing Stripes\", \"Scuderia Shields\"],
        description: \"The F8 Tributo is the most powerful V8 Ferrari ever made, a tribute to the most successful engine in the marque's history.\"
    }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const carsGrid = document.getElementById('carsGrid');
const carModal = document.getElementById('carModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const newsletterForm = document.getElementById('newsletterForm');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Format price
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(price);
}

// Show toast notification
function showToast(message, isError = false) {
    toastMessage.textContent = message;
    toast.classList.toggle('error', isError);
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Render car cards
function renderCars() {
    carsGrid.innerHTML = carsData.map(car => `
        <div class=\"car-card\" onclick=\"openCarModal('${car.id}')\">
            <div class=\"car-image\">
                <span class=\"car-badge\">${car.brand}</span>
                <img src=\"${car.image}\" alt=\"${car.name}\" loading=\"lazy\">
            </div>
            <div class=\"car-content\">
                <h3 class=\"car-name\">${car.name}</h3>
                <div class=\"car-price\">${formatPrice(car.price)}</div>
                <div class=\"car-specs\">
                    <span><i class=\"fas fa-bolt\"></i> <span class=\"value\">${car.horsepower} HP</span></span>
                    <span><i class=\"fas fa-tachometer-alt\"></i> <span class=\"value\">${car.acceleration}</span></span>
                    <span><i class=\"fas fa-calendar\"></i> <span class=\"value\">${car.year}</span></span>
                </div>
                <button class=\"car-btn\">View Details</button>
            </div>
        </div>
    `).join('');
}

// Open car modal
function openCarModal(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;

    modalBody.innerHTML = `
        <div class=\"modal-gallery\">
            <img src=\"${car.gallery[0]}\" alt=\"${car.name}\" class=\"modal-main-image\" id=\"mainImage\">
            <div class=\"modal-thumbs\">
                ${car.gallery.map((img, index) => `
                    <img src=\"${img}\" alt=\"${car.name} view ${index + 1}\" 
                         class=\"modal-thumb ${index === 0 ? 'active' : ''}\"
                         onclick=\"changeImage('${img}', this)\">
                `).join('')}
            </div>
        </div>
        <div class=\"modal-info\">
            <span class=\"car-badge\">${car.brand}</span>
            <h2>${car.name}</h2>
            <div class=\"modal-price\">${formatPrice(car.price)}</div>
            <p class=\"modal-description\">${car.description}</p>
            
            <div class=\"modal-specs\">
                <div class=\"spec-item\">
                    <span class=\"spec-label\"><i class=\"fas fa-cog\"></i> Engine</span>
                    <span class=\"spec-value\">${car.engine}</span>
                </div>
                <div class=\"spec-item\">
                    <span class=\"spec-label\"><i class=\"fas fa-bolt\"></i> Horsepower</span>
                    <span class=\"spec-value\">${car.horsepower} HP</span>
                </div>
                <div class=\"spec-item\">
                    <span class=\"spec-label\"><i class=\"fas fa-tachometer-alt\"></i> 0-100 km/h</span>
                    <span class=\"spec-value\">${car.acceleration}</span>
                </div>
                <div class=\"spec-item\">
                    <span class=\"spec-label\"><i class=\"fas fa-gauge-high\"></i> Top Speed</span>
                    <span class=\"spec-value\">${car.topSpeed}</span>
                </div>
                <div class=\"spec-item\">
                    <span class=\"spec-label\"><i class=\"fas fa-gas-pump\"></i> Fuel Type</span>
                    <span class=\"spec-value\">${car.fuelType}</span>
                </div>
                <div class=\"spec-item\">
                    <span class=\"spec-label\"><i class=\"fas fa-calendar\"></i> Year</span>
                    <span class=\"spec-value\">${car.year}</span>
                </div>
            </div>
            
            <div class=\"modal-features\">
                <h3>FEATURES</h3>
                <div class=\"features-list\">
                    ${car.features.map(feature => `
                        <span><i class=\"fas fa-check\"></i> ${feature}</span>
                    `).join('')}
                </div>
            </div>
            
            <div style=\"margin-top: 2rem;\">
                <a href=\"#contact\" class=\"btn btn-primary\" onclick=\"closeCarModal()\">
                    Book Test Drive <i class=\"fas fa-arrow-right\"></i>
                </a>
            </div>
        </div>
    `;

    carModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

// Change modal image
function changeImage(src, thumbElement) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.modal-thumb').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbElement.classList.add('active');
}

// Close car modal
function closeCarModal() {
    carModal.classList.remove('open');
    document.body.style.overflow = '';
}

// Modal close handlers
modalClose.addEventListener('click', closeCarModal);
carModal.addEventListener('click', (e) => {
    if (e.target === carModal) {
        closeCarModal();
    }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && carModal.classList.contains('open')) {
        closeCarModal();
    }
});

// Newsletter form
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    
    // Simulate API call
    setTimeout(() => {
        showToast('Successfully subscribed to our newsletter!');
        newsletterForm.reset();
    }, 500);
});

// Contact form
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate API call
    setTimeout(() => {
        showToast('Message sent successfully! We'll get back to you soon.');
        contactForm.reset();
    }, 500);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animations to elements
document.querySelectorAll('.feature-card, .car-card, .testimonial-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCars();
});
"
