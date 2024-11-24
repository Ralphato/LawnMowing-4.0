document.addEventListener('DOMContentLoaded', function() {
  // Get modal elements
const modal = document.getElementById('quoteModal');
const closeModal = document.querySelector('.close');
const quoteButtons = document.querySelectorAll('.quote-modal');
const step1Content = document.getElementById('step-content-1');
const step2Content = document.getElementById('step-content-2');
const nextStepButton = document.getElementById('nextStepButton');
const step1 = document.getElementById('step-1'); //progress bar
const step2 = document.getElementById('step-2'); //progress bar


function showStep1() {
  step1Content.style.display = "block";
  step2Content.style.display = "none";
  nextStepButton.style.display = "inline-block";
  const bar = document.querySelector('.bar'); // the progress line between steps
  bar.classList.remove('active'); // remove the progress line green
}

// Show modal when "Get a Quote" button is clicked
quoteButtons.forEach(button => {
    button.addEventListener('click', () => {
        showStep1();
        modal.style.display = "flex";
        step1Content.style.display = 'block';
        document.documentElement.style.overflow = "hidden";
        step1.classList.add('active');
        step2.classList.remove('active');
        console.log('lol');
    });
  });



// Close the modal when the user clicks the close button
closeModal.onclick = function () {
  
    modal.style.display = "none"; 
    //go back to step1 and clear data (needs to be done)
    //get out after email is sent
    document.documentElement.style.overflow = "auto";
}

// Close the modal when the user clicks outside the modal content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.documentElement.style.overflow = "auto";
    }
}

});



let selectedService2 ="";

function currentService(serv) {
  selectedService2 = serv;
  //console.log(serv);
  //const subjectInput = document.getElementById('subject2');
  //subjectInput.value = serv;
  //subjectInput.placeholder = serv;
  
}

document.addEventListener('DOMContentLoaded', function () {
    const nextStepButton = document.getElementById('nextStepButton');
    const step1Content = document.getElementById('step-content-1');
    const step2Content = document.getElementById('step-content-2');
    const step1 = document.getElementById('step-1'); // progress bar for step 1
    const step2 = document.getElementById('step-2'); // progress bar for step 2
    const bar = document.querySelector('.bar'); // the progress line between steps
    bar.classList.remove('active'); // remove the progress line green
  
    let currentStep = 1;
  
    nextStepButton.onclick = function () {

        if(selectedService2 === ""){
            alert("Please select a service ");
        }
        else if (currentStep === 1) {
            // Transition to step 2
            step1Content.style.display = 'none';
            step2Content.style.display = 'block';
            step1.classList.remove('active');
            step2.classList.add('active');
            bar.classList.add('active'); // Make the progress line green
            nextStepButton.style.display = 'none'; // Hide the button if not needed in step 2
        } 
    };
});

  




