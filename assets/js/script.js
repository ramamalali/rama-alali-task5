/* https://preview.colorlib.com/theme/me/ */

 /*  image opacity */

 const image = document.getElementById("hidden-image");
const windowHeight = window.innerHeight;
const smallScrollPosition = 50; 

window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY + windowHeight;
  const imagePosition = image.offsetTop + image.offsetHeight / 2;
  const topPosition = image.offsetTop - windowHeight / 2;
  if ((scrollPosition > imagePosition || window.scrollY < topPosition) && window.scrollY > smallScrollPosition) {
    image.style.opacity = 1;
  } else {
    image.style.opacity = 0;
  }
});



  // Get all the navigation links
  const navLinks = document.querySelectorAll('.navbar-nav a');

  // Add click event listener to each of the navigation links
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = targetElement.offsetTop;

      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    });
  });

  // Add scroll event listener to the window
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset ;

    sections.forEach(function(section) {
        const sectionOffsetTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionOffsetTop && scrollPosition < (sectionOffsetTop + sectionHeight)) {
        document.querySelector('.navbar-nav a[href="#' + sectionId + '"]').classList.add('active2');
      } else {
        document.querySelector('.navbar-nav a[href="#' + sectionId + '"]').classList.remove('active2');
      }
    });
  });




/*   window.addEventListener('scroll', function() { 
    let links = navbar.querySelectorAll('.navbar-nav a');
    let sections = document.querySelectorAll('section');
 
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        let section = sections[i] ;
        
      if (section.offsetTop <= window.scrollY) {
        link.classList.add(".active2");
       
  }else{
    link.classList.remove(".active2");
  }
}}); */





/* localStorage */

const sendBtn = document.querySelector("#btn");

sendBtn.addEventListener('click', function () {
const inputs = document.querySelectorAll("input, textarea");
  for (let i = 0; i < inputs.length; i++) {
    const key = inputs[i].id;
    const value = inputs[i].value;
    localStorage.setItem(key, value);

 } });

 function loadData() {
  const inputs = document.querySelectorAll("input, textarea");
  for (let i = 0; i < inputs.length; i++) {
    const key = inputs[i].id;
    const value =localStorage.getItem(key);
    if (value) {
      inputs[i].value = value;
    }
  }
}

loadData();



