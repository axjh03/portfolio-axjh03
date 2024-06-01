// Change the navbar color when scrolling
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('header');
    navbar.classList.toggle('sticky', window.scrollY > 0);
})

// Function to toggle headers based on screen size
function toggleHeaders() {
    const desktopHeader = document.getElementById('desktop');
    const phoneHeader = document.getElementById('phone');
  
    if (window.innerWidth <= 768) {
      desktopHeader.classList.add('hidden');
      desktopHeader.classList.remove('show');
      phoneHeader.classList.add('show');
      phoneHeader.classList.remove('hidden');
    } else {
      desktopHeader.classList.add('show');
      desktopHeader.classList.remove('hidden');
      phoneHeader.classList.add('hidden');
      phoneHeader.classList.remove('show');
    }
  }
  
  // Add event listener for window resize
  window.addEventListener('resize', toggleHeaders);
  
  // Call the function initially to set the correct header on page load
  toggleHeaders();
  
  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("username-phone");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
      y.style.color = "aqua";
    } else {
      x.style.display = "block";
      y.style.display = "none";
      y.style.color = "aqua";
    }
  }




  // on click of burger-button id make id 'username' class set to "hidden"
