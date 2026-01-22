// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            navMenu.style.display = 'none';
            hamburger.classList.remove('active');
        });
    });
}

// Tours Filtering
function initTourFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const toursGrid = document.getElementById('toursGrid');

    if (!toursGrid) return;

    displayTours('all');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayTours(btn.getAttribute('data-filter'));
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        displayTours(category);
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-filter') === category) {
                btn.classList.add('active');
            }
        });
    }
}

function displayTours(filter) {
    const toursGrid = document.getElementById('toursGrid');
    toursGrid.innerHTML = '';

    const filteredTours = filter === 'all' 
        ? tours 
        : tours.filter(tour => tour.category === filter);

    filteredTours.forEach(tour => {
        const tourCard = document.createElement('div');
        tourCard.className = 'tour-card';
        tourCard.innerHTML = `
            <img src="${tour.image}" alt="${tour.title}">
            <div class="tour-card-content">
                <span class="tour-category">${tour.category}</span>
                <h3>${tour.title}</h3>
                <p>${tour.description}</p>
                <div class="tour-info">
                    <span class="tour-duration">⏱️ ${tour.duration || ''}</span>
                    <span class="tour-price">${tour.price || ''}</span>
                </div>
                <button class="tour-btn" onclick="alert('Added to cart!')">More Information</button>
            </div>
        `;
        toursGrid.appendChild(tourCard);
    });
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will contact you soon.');
        contactForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', initTourFilter);