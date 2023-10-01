if (window.innerWidth <= 768) {

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navmenu");
  const menuCheckbox = document.getElementById("menubar");
  const aboutLink = document.querySelector('.nav-item.close a');
  const submenu = document.querySelector('.nav-item.has-sub ul.submenu');

    // Hamburger verandert in kruisje
  hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  });

  menuCheckbox.addEventListener("change", () => {
      hamburger.classList.toggle("active", menuCheckbox.checked);
  });

  // Voeg een click-eventlistener toe aan de "About" link
  aboutLink.addEventListener('click', function (event) {
      submenu.style.display = 'none'; 
      menuCheckbox.checked = false; 
      hamburger.classList.remove("active"); 
  });

  // Openen en sluiten submenu + Draaien pijltje in submenu
  const submenuItems = document.querySelectorAll('.navmenu ul li.has-sub');

  submenuItems.forEach(item => {
      const submenuLink = item.querySelector('a');
      const submenu = item.querySelector('ul');
      const arrow = submenuLink.querySelector('.arrow');

      submenuLink.addEventListener('click', function (event) {
          event.preventDefault();
          submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';

          if (submenu.style.display === 'block') {
              arrow.classList.add('arrow-up');
          } else {
              arrow.classList.remove('arrow-up');
          }

          submenuItems.forEach(otherItem => {
              if (otherItem !== item && otherItem.querySelector('.arrow')) {
                  otherItem.querySelector('ul').style.display = 'none';
                  otherItem.querySelector('.arrow').classList.remove('arrow-up');
              }
          });
      });
  });
}
