// Hamburger verandert in kruisje
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
const menuCheckbox = document.getElementById("menubar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

menuCheckbox.addEventListener("change", () => {
  hamburger.classList.toggle("active", menuCheckbox.checked);
});

// Openen en sluiten submenu + Draaien pijltje in submenu
    const submenuItems = document.querySelectorAll('.navmenu ul li');
    
    submenuItems.forEach(item => {
      const submenuLink = item.querySelector('a');
      const submenu = item.querySelector('ul');
      const arrow = submenuLink.querySelector('.arrow');
      
      submenuLink.addEventListener('click', function (event) {
        event.preventDefault();
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    
        if (submenu.style.display === 'block') {
            arrow.classList.add('arrow-up'); // Voeg de klasse toe om het pijltje naar boven te draaien
        } else {
            arrow.classList.remove('arrow-up'); // Verwijder de klasse om het pijltje terug te draaien naar beneden
        }
    
        submenuItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector('ul').style.display = 'none';
                otherItem.querySelector('.arrow').classList.remove('arrow-up'); // Zorg ervoor dat andere pijltjes worden gereset naar naar beneden
            }
        });
    });
    
    });