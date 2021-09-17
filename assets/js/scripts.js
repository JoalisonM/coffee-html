const Modal = {
  open() {
    document.querySelector('.modal-overlay').classList.add('active')
  },

  close() {
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}

const menuMobile = document.querySelector(".menuMobile");

function toggleMenu(event) {
  if (event.type === "touchStart") event.preventDefault();
  const nav = document.querySelector(".headerContent nav");
  nav.classList.toggle('active');

  const active = nav.classList.contains("active");

  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

menuMobile.addEventListener("click", toggleMenu);
menuMobile.addEventListener("touchStart", toggleMenu);