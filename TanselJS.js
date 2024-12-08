// +++++++++++++++++NAVBAR JS ++++++++++++++++++++++++
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show-menu');
    toggle.classList.toggle('show-icon');


    if (nav.classList.contains('show-menu')) {
      nav.style.pointerEvents = 'auto';
    } else {
      nav.style.pointerEvents = 'none'
      console.log("It's ot workıng thıs code");
    }
  });
};

showMenu('nav-toggle', 'nav-menu');

const reviewBoxes = document.querySelectorAll('.review-box');

// Add event listeners for each box
reviewBoxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    box.style.transform = 'scale(1.1)'; // Scale up
    box.style.backgroundColor = 'coral'; // Change background color
  });

  box.addEventListener('mouseout', () => {
    box.style.transform = 'scale(1)'; // Reset scale
    box.style.backgroundColor = 'white'; // Reset background color
  });
});

const components = document.querySelectorAll('.featured-component');

components.forEach((component) => {
  component.addEventListener('mouseenter', () => {
    // Reset to initial position before rotating
    component.style.transform = 'rotate(0deg)';

    // Allow browser to reset the state
    setTimeout(() => {
      // Now apply the rotation
      component.style.transform = 'rotate(360deg)';
    }, 10);
    // Small delay to ensure the reset is registered
  });
});

document.querySelectorAll('.city').forEach((imgContainer) => {
  const title = imgContainer.querySelector('p');

  imgContainer.addEventListener('mouseenter', () => {
    title.style.opacity = '1'; // Show the title
  });

  imgContainer.addEventListener('mouseleave', () => {
    title.style.opacity = '0'; // Hide the title
  });
});

const buttons = document.querySelectorAll('.menu button');
const contents = document.querySelectorAll('.content');

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons and content divs
    buttons.forEach((btn) => btn.classList.remove('active'));
    contents.forEach((content) => content.classList.remove('active'));

    // Add 'active' class to the clicked button and corresponding content
    button.classList.add('active');
    const target = button.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});

// -- SLIDER FOR ANNIVERSARY TOUR

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentIndex = 0;

const showSlide = (index) => {
  slider.style.transform = `translateX(-${index * 100}%)`;
  thumbnails.forEach((thumbnail, idx) => {
    thumbnail.classList.toggle('active', idx === index);
  });
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
};

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide(currentIndex);
