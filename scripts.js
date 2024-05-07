// To-top-button
var toTopButton = document.getElementById("to-top-button");

if (toTopButton) {
    window.onscroll = function() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            toTopButton.classList.remove("hidden");
        } else {
            toTopButton.classList.add("hidden");
        }
    };

    window.goToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}

// Subrayado del menu al scrolear por seccion
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const menuItems = document.querySelectorAll(".menu-item");
  
    function highlightMenuItem() {
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const bottom = top + section.clientHeight;
        const scrollPosition = window.scrollY;
  
        if (scrollPosition >= top && scrollPosition < bottom) {
          const id = section.id;
          menuItems.forEach((item) => {
            if (item.getAttribute("href") === `#${id}`) {
              item.classList.add("active");
            } else {
              item.classList.remove("active");
            }
          });
        }
      });
    }
  
    window.addEventListener("scroll", highlightMenuItem);
  });
  
// Envio mail
const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#mailSender')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      $buttonMailto.setAttribute('href', `mailto:alejandromperis@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
      $buttonMailto.click()
    }