const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// # TASK 1 & 2
// Nav
let navElements = document.querySelectorAll('nav a');
navElements.forEach((anchor, i) => {
  anchor.textContent = siteContent["nav"][`nav-item-${i+1}`];
});

// CTA
let ctaElement = document.querySelector('.cta h1');
ctaElement.textContent = siteContent['cta']['h1'];
document.querySelector('.cta button').textContent = siteContent['cta']['button'];
document.querySelector('.cta img').src = siteContent['cta']['img-src'];

// Main Content
let mainContentValues = Object.values(siteContent['main-content']);
mainContentValues.splice(4, 1);
let mainContentHeaders = document.querySelectorAll('.main-content h4');
mainContentHeaders.forEach((header, i) => {
  header.textContent = mainContentValues[i * 2];
});
let mainContentParagraphs = document.querySelectorAll('.main-content p');
mainContentParagraphs.forEach((paragraph, i) => {
  paragraph.textContent = mainContentValues[(i * 2) + 1];
});
let mainContentImg = document.querySelector('.main-content img');
mainContentImg.src = siteContent['main-content']['middle-img-src'];

// Contact
let contactElements = Array.from(document.querySelector('.contact').children);
const contactValues = Object.values(siteContent['contact']);
contactElements.forEach((element, i) => {
  element.textContent = contactValues[i];
});

// Footer
document.querySelector('footer p').textContent = siteContent['footer']['copyright'];


// # TASK 3
// Nav color green
navElements.forEach(element => {
  element.style.color = 'green';
});

// Appending and prepending to the nav
let nav = document.querySelector('nav');
const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
nav.appendChild(blogLink);
const careersLink = document.createElement('a');
careersLink.textContent = 'Careers';
nav.prepend(careersLink);


// # STRETCH
// Assorted styling



