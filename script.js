// get the button
const scrollTop = document.getElementById('scroll-to-top');
// show the button when the scroll is up to a particular height
window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    scrollTop.style.display = 'block';
  } else {
    scrollTop.style.display = 'none';
  }
});
// scroll to the top on click of the button

scrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

/* Form Submission */
// Get the form
const contactForm = document.getElementById('contact-form');
// Add the even listener for the form submission
contactForm.addEventListener('submit', event => {
  // prevents default submission beaviour of the form
  event.preventDefault();
  //   Show a success alert

  Swal.fire({
    title: 'Submission Successful!',
    text: 'Thank you for your quick response',
    icon: 'success',
  });
});
//
