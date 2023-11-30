document.addEventListener('DOMContentLoaded', () => {
  /** * *******     Mobile Navbar        ****** ** */

  const showMenu = document.querySelector('.menu');
  const closeMenu = document.querySelector('.close-menu');
  const navLinks = document.querySelector('.nav-links');

  const showMobileMenu = () => {
    navLinks.classList.add('nav-mbl-active');
    showMenu.style.display = 'none';
    closeMenu.style.display = 'block';
  };

  const hideMobileMenu = () => {
    navLinks.classList.remove('nav-mbl-active');
    showMenu.style.display = 'block';
    closeMenu.style.display = 'none';
  };

  const checkScreenSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 767 && navLinks.classList.contains('nav-mbl-active')) {
      hideMobileMenu();
    }
  };

  closeMenu.addEventListener('click', hideMobileMenu);
  showMenu.addEventListener('click', showMobileMenu);

  navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
      hideMobileMenu();
    }
  });

  window.addEventListener('resize', checkScreenSize);

  checkScreenSize();

  /** * *******     Leading instructors        ****** ** */

  const instructors = [
    {
      img: 'images/instructor1.jpg',
      name: 'Shadman Ali',
      subject: 'Passionate Web Developer',
      detail:
        'Ability to simplify complex coding concepts, making learning enjoyable.',
    },
    {
      img: 'images/instructor2.jpg',
      name: 'Kendra James',
      subject: 'Innovative iOS Developer',
      detail:
        'Strong background in app design, encourages students to build intuitive applications.',
    },
    {
      img: 'images/instructor3.jpg',
      name: 'Evan Shaq',
      subject: 'Skilled Android Developer',
      detail: 'Fosters collaborative and inclusive learning environment.',
    },
    {
      img: 'images/instructor4.jpg',
      name: 'Chirag Agarwal',
      subject: 'Data wizard in Python',
      detail: 'Mentors aspiring data scientists to drive impactful solutions.',
    },
    {
      img: 'images/instructor5.jpg',
      name: 'Divya Pritam',
      subject: 'Creative Graphic Designer',
      detail:
        'Inspires students to explore artistic boundaries, using design as a powerful tool.',
    },
    {
      img: 'images/instructor6.jpg',
      name: 'Noah Williams',
      subject: 'Leading AI Expert',
      detail:
        'Dedicated AI instructor employs hands-on, innovative methods to guide students.',
    },
  ];

  const displayInstructors = (instructors) => {
    const instructorContainer = document.querySelector('.instructor-container');
    instructors.forEach((instructor) => {
      instructorContainer.innerHTML += ` <div class="instructor">
          <div class="img-container">
            <img
              class="chess-board"
              src="images/Chess_Board.png"
              alt="chess board"
            />
            <img
              class="instructor-img"
              src=${instructor.img}
              alt="Instrcutor"
            />
          </div>
          <div class="instructor-details">
            <h3>${instructor.name}</h3>
            <h4>${instructor.subject}</h4>
            <p>${instructor.detail}</p>
          </div>
        </div>`;
    });
  };
  displayInstructors(instructors);
});
