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

// Buttons skills
function filterSelection(leerdoelen) {
  var alleLeerdoelen, i;
  alleLeerdoelen = document.getElementsByClassName("filterDiv");
  for (i = 0; i < alleLeerdoelen.length; i++) {
      RemoveClass(alleLeerdoelen[i], "show");
      if (alleLeerdoelen[i].classList.contains(leerdoelen)) {
          AddClass(alleLeerdoelen[i], "show");
      }
  }

  scrollToTop();
}

function AddClass(element, name) {
  var newClasses = name.split(" ");
  element.classList.add(...newClasses);
}

function RemoveClass(element, name) {
  var elementClasses = element.className.split(" ");
  var newClasses = name.split(" ");
  for (var i = 0; i < newClasses.length; i++) {
      while (elementClasses.indexOf(newClasses[i]) > -1) {
          elementClasses.splice(elementClasses.indexOf(newClasses[i]), 1);
      }
  }
  element.className = elementClasses.join(" ");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("buttonSkills");
var firstButton = btns[0]; 

firstButton.classList.add("active");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
      for (var j = 0; j < btns.length; j++) {
          btns[j].classList.remove("active");
      }

      this.classList.add("active");

      var filter = this.getAttribute("data-filter");
      filterSelection(filter);
  });
}

btns[0].click();

