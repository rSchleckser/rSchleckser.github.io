/*==================== toggle icon navbar ====================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

navbar.classList.remove('bx-x');
navbar.classList.remove('active');

/*==================== scroll reveal ====================*/
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact form', {
  origin: 'bottom',
});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Engineer', 'Backend Engineer', 'Fullstack Engineer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// // Home Section
// const body = document.body;
// const header = document.createElement('header');
// header.setAttribute('class', 'header');
// // console.log(header);

// const logo = document.createElement('a');
// logo.setAttribute('class', 'logo');
// logo.textContent = 'Portfolio';
// // console.log(logo);

// const icon = document.createElement('i');
// icon.setAttribute('class', 'bx bx-menu');
// icon.setAttribute('id', 'menu-icon');

// const nav = document.createElement('nav');
// nav.setAttribute('class', 'navbar');

// const homeTag = document.createElement('a');
// homeTag.setAttribute('href', '#home');
// homeTag.setAttribute('class', 'active');
// homeTag.textContent = 'Home';

// const aboutTag = document.createElement('a');
// aboutTag.setAttribute('href', '#about');
// aboutTag.textContent = 'About';

// const servicesTag = document.createElement('a');
// servicesTag.setAttribute('href', '#services');
// servicesTag.textContent = 'Services';

// const portfolioTag = document.createElement('a');
// portfolioTag.setAttribute('href', '#portfolio');
// portfolioTag.textContent = 'Portfolio';

// const contactTag = document.createElement('a');
// contactTag.setAttribute('href', '#contact');
// contactTag.textContent = 'Contact';

// // adding a tags to navbar
// nav.append(homeTag);
// nav.append(aboutTag);
// nav.append(servicesTag);
// nav.append(portfolioTag);
// nav.append(contactTag);

// // adding main items to header
// header.append(logo);
// header.append(icon);
// header.append(nav);
// body.append(header);

// // Home Section
// const homeSection = document.createElement('section');
// homeSection.setAttribute('class', 'home');
// homeSection.setAttribute('id', 'home');

// const homeContent = document.createElement('div');
// homeContent.setAttribute('class', 'home-content');

// const firstH3 = document.createElement('h3');
// firstH3.textContent = "Hello, It's Me";

// const firstH1 = document.createElement('h1');
// firstH1.textContent = 'Richard Schleckser';

// const secondH3 = document.createElement('h3');
// secondH3.textContent = "And I'm a ";

// const span = document.createElement('span');
// span.textContent = 'Frontend Engineer';

// const firstP = document.createElement('p');
// firstP.textContent =
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. In adipisci accusantium explicabo ratione modi nobis. Asperiores, minus!';

// const socialMedia = document.createElement('div');
// socialMedia.setAttribute('class', 'social-media');

// const facebookTag = document.createElement('a');
// facebookTag.setAttribute('href', '#');

// const facebookIcon = document.createElement('i');
// facebookIcon.setAttribute('class', 'bx bxl-facebook');
// facebookTag.append(facebookIcon);

// const twitterTag = document.createElement('a');
// twitterTag.setAttribute('href', '#');

// const twitterIcon = document.createElement('i');
// twitterIcon.setAttribute('class', 'bx bxl-twitter');
// twitterTag.append(twitterIcon);

// const instagramTag = document.createElement('a');
// instagramTag.setAttribute('href', '#');

// const instagramIcon = document.createElement('i');
// instagramIcon.setAttribute('class', 'bx bxl-instagram');
// instagramTag.append(instagramIcon);

// const linkedInTag = document.createElement('a');
// linkedInTag.setAttribute('href', '#');

// const linkedInIcon = document.createElement('i');
// linkedInIcon.setAttribute('class', 'bx bxl-linkedin');
// linkedInTag.append(linkedInIcon);

// const btnTag = document.createElement('a');
// btnTag.setAttribute('href', '#');
// btnTag.setAttribute('class', 'btn');
// btnTag.textContent = 'Download CV';

// const homImg = document.createElement('div');
// homImg.setAttribute('class', 'home-img');

// const img = document.createElement('img');
// img.setAttribute('src', '/images/personal-portfolio-pic.png');
// img.setAttribute('alt', '');

// homeSection.append(homeContent);
// homeContent.append(firstH3);
// homeContent.append(firstH1);
// secondH3.append(span);
// homeContent.append(secondH3);
// homeContent.append(firstP);
// homeContent.append(socialMedia);
// socialMedia.append(facebookTag);
// socialMedia.append(twitterTag);
// socialMedia.append(instagramTag);
// socialMedia.append(linkedInTag);
// homeContent.append(btnTag);
// homImg.append(img);
// homeSection.append(homImg);

// body.insertBefore(homeSection, body.firstChild);
