// Toggle Mobile Menu
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Dynamic Car Fleet Data
const cars = [
    { name: "Lamborghini Urus", price: "$200/DAY", image: "urus.jpg" },
    { name: "Alfa Romeo Stelvio", price: "$300/DAY", image: "stelvio.jpg" },
    { name: "BMW 7 Series", price: "$600/DAY", image: "bmw7.jpg" },
    { name: "Bentley Genesis", price: "$1000/DAY", image: "bentley.jpg" },
    { name: "McLaren GT", price: "$1500/DAY", image: "mclaren.jpg" }
];

const carGrid = document.querySelector(".car-grid");
cars.forEach(car => {
    carGrid.innerHTML += `
        <div class="car-card">
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p><strong>${car.price}</strong></p>
            <button class="cta-btn">BOOK NOW</button>
        </div>
    `;
});

// Cookie Consent
document.querySelector(".allow-cookies").addEventListener("click", () => {
    document.querySelector(".cookie-banner").style.display = "none";
});

document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle("active");
    });
});


