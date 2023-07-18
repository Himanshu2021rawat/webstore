

const dataofusernavigation = document.querySelector('.dataofusernavigation');

dataofusernavigation.addEventListener('click', (event) => {
  // event.preventDefault(); // Prevent the default behavior of the anchor tag

  const url = dataofusernavigation.href; // Get the URL from the anchor tag
  const webname = document.querySelector('.webname').textContent; // Get the text content of the webname element
  const isfav = document.querySelector('.isfav').textContent; // Get the text content of the isfav element
  const webcategory = document.querySelector('.webcategory').textContent; // Get the text content of the webcategory element

  // Save the data in localStorage
  localStorage.setItem('url', url);
  localStorage.setItem('webname', webname);
  localStorage.setItem('isfav', isfav);
  localStorage.setItem('webcategory', webcategory);

 

  // Retrieve data from localStorage
  const savedUrl = localStorage.getItem('url');
  const savedWebname = localStorage.getItem('webname');
  const savedIsfav = localStorage.getItem('isfav');
  const savedWebcategory = localStorage.getItem('webcategory');

console.log(savedUrl);
console.log(savedWebname);
console.log(savedIsfav);
console.log(savedWebcategory);


});