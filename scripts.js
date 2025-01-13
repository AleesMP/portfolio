// To-top-button
document.addEventListener("DOMContentLoaded", function() {
  var toTopButton = document.getElementById("to-top-button");

  function checkScroll() {
      if (window.scrollY > 400) {
          toTopButton.classList.remove("hide");
          toTopButton.classList.add("show");
      } else {
          toTopButton.classList.remove("show");
          toTopButton.classList.add("hide");
      }
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Verificar el scroll al cargar la página

  window.goToTop = function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  };
});

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

    $(document).ready(function(){
      // Función para ajustar el desplazamiento al hacer clic en un enlace del navbar
      $('a.menu-item').click(function(event){
        event.preventDefault();
        var navbarHeight = $('section.sticky').outerHeight();
        var targetId = $(this).attr('href');
        var targetOffset = $(targetId).offset().top - navbarHeight;
        
        $('html, body').animate({
          scrollTop: targetOffset
        }, 500);
      });
    });