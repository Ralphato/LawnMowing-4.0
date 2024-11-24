
let selectedService;

function currentServiceModal(serv) {
  selectedService = serv;

  console.log(selectedService);
  //console.log(subjectInput.value);
  
}


document.addEventListener('DOMContentLoaded', function () {
  // Select all service boxes
  const serviceBoxes = document.querySelectorAll('.service-box');

  // Function to handle click and set active state
  serviceBoxes.forEach(box => {
    box.addEventListener('click', function () {
      // Remove active class from all boxes
      serviceBoxes.forEach(box => box.classList.remove('active'));
      
      // Add active class to the clicked box
      this.classList.add('active');
    });
  });
});

function checkParam(){

  // Prevent the form from submitting (prevent page refresh)
 console.log('lol');
  // Get form values
  let name = document.getElementById("name").value.trim();
  let number = document.getElementById("number").value.trim();
  let email = document.getElementById("email").value.trim();
  let location = document.getElementById("location").value.trim();
  let service = document.getElementById("service").value.trim();
  let message = document.getElementById("message").value.trim();

  // Check if any of the fields are empty
  if (!name || !number || !email || !location || !service ) {
    return; // Stop the function if validation fails
  }
  
  sendMail();
  event.preventDefault();
}



function sendMail(){

  let submitButton = document.getElementById("submit1");
  
  // Disable the submit button and change its text
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  let nothingHappens = true;
  document.getElementById("loading-screen").style.display = "flex";
  
  let parms = {
    name: document.getElementById("name").value,
    number: document.getElementById("number").value,
    email: document.getElementById("email").value,
    location: document.getElementById("location").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value,
  };
  
  // Set a timeout fallback for "nothing happens" after 10 seconds
  let fallbackTimeout = setTimeout(function() {
    if (nothingHappens) {
      document.getElementById("loading-screen").style.display = "none";
      showPopup('Failed to send email. Email us at WeMow@gmail.com', false);
    }
  }, 10000); // Adjust the delay as needed (e.g., 10 seconds)
  
  emailjs.send("service_165sxf5", "template_qiwq3ip", parms)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      
      // Clear the fallback timeout if success happens before 10 seconds
      clearTimeout(fallbackTimeout);
      nothingHappens = false; // Mark as handled
  
      document.getElementById("loading-screen").style.display = "none";
      submitButton.disabled = false;
      submitButton.textContent = "SCHEDULE A SERVICE"; // Reset the button text
      showPopup('Email sent successfully!', true);

    })
    .catch(function(error) {
      console.log('FAILED...', error);
      
      // Clear the fallback timeout if an error happens before 10 seconds
      clearTimeout(fallbackTimeout);
      nothingHappens = false; // Mark as handled
  
      document.getElementById("loading-screen").style.display = "none";
      showPopup('Failed to send email. Email us at WeMow@gmail.com', false);
    });
  
  
  
}

function checkParam2(){

  // Prevent the form from submitting (prevent page refresh)
 console.log('lol');
  // Get form values
  let name = document.getElementById("name2").value.trim();
  let number = document.getElementById("number2").value.trim();
  let email = document.getElementById("email2").value.trim();
  let location = document.getElementById("location2").value.trim();
  let message = document.getElementById("message2").value.trim();


  // Check if any of the fields are empty
  if (!name || !number || !email || !location ) {

    return; // Stop the function if validation fails
  }
  
  sendMail2();
  event.preventDefault();
}


function sendMail2(){

  let submitButton = document.getElementById("submit2");
  
  // Disable the submit button and change its text
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  let nothingHappens = true;
  document.getElementById("loading-screen").style.display = "flex";
  
  let parms = {
    name: document.getElementById("name2").value,
    number: document.getElementById("number2").value,
    email: document.getElementById("email2").value,
    location: document.getElementById("location2").value,
    message: document.getElementById("message2").value,
    service: selectedService
  };
  
  // Set a timeout fallback for "nothing happens" after 10 seconds
  let fallbackTimeout = setTimeout(function() {
    if (nothingHappens) {
      document.getElementById("loading-screen").style.display = "none";
      showPopup('Failed to send email. Email us at WeMow@gmail.com', false);
    }
  }, 10000); // Adjust the delay as needed (e.g., 10 seconds)
  
  emailjs.send("service_165sxf5", "template_qiwq3ip", parms)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      
      // Clear the fallback timeout if success happens before 10 seconds
      clearTimeout(fallbackTimeout);
      nothingHappens = false; // Mark as handled
  
      document.getElementById("loading-screen").style.display = "none";
      submitButton.disabled = false;
      submitButton.textContent = "SCHEDULE A SERVICE"; // Reset the button text
      showPopup('Email sent successfully!', true);

      //close modal
      const modal = document.getElementById('quoteModal');
      modal.style.display = "none"; 
      document.documentElement.style.overflow = "auto";

    })
    .catch(function(error) {
      console.log('FAILED...', error);
      
      // Clear the fallback timeout if an error happens before 10 seconds
      clearTimeout(fallbackTimeout);
      nothingHappens = false; // Mark as handled
  
      document.getElementById("loading-screen").style.display = "none";
      showPopup('Failed to send email. Email us at WeMow@gmail.com', false);

      //close modal
      const modal = document.getElementById('quoteModal');
      modal.style.display = "none"; 
      document.documentElement.style.overflow = "auto";
    });
  
  
  
}



function showPopup(message,success) {
  // Get the popup element and message element
  var popup = document.getElementById("popup");
  var popupMessage = document.getElementById("popup-message");

  popupMessage.textContent = message;

  if(success){
   popup.style.backgroundColor = '#28a745'; // Green for success
  }

  else{
    popup.style.backgroundColor = '#dc3545'; // Red
  }

  // Show the popup
  popup.style.display = 'block';
  popup.classList.add('show'); // Add the "show" class for the slide-up effect



  
  // Hide the popup after 3 seconds
  setTimeout(function() {
    popup.classList.remove('show'); // Add the "show" class for the slide-up effect

    setTimeout(function() {
      popup.style.display = 'none'; // Then hide completely
    }, 300); // Match this with the transition duration in the CSS
  }, 3000); // Display for 3 seconds
}



