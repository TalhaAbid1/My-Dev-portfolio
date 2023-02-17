// STYLING SMOOTH FLOW ANIMATION OF ABOUT BUTTONS
$('#skills').on('click', function () {
  $('#skillsz').addClass("Active")
  $('#experiencez').removeClass("Active")
  $('#educationz').removeClass("Active")

  $('#skills').addClass("Active-Link")
  $('#experience').removeClass("Active-Link")
  $('#education').removeClass("Active-Link")

  $("li.Active-Link").animate({ left: '3%' }, 200);
  $("li.Active-Link").animate({ left: '0%' }, 500);

  $("#skillsz").animate({ left: '0%', opacity: 1 }, 600);
  $("#experiencez").animate({ left: '10%', opacity: 0 }, 0);
  $("#educationz").animate({ left: '10%', opacity: 0 }, 0);
})

$('#experience').on('click', function () {
  $('#skillsz').removeClass("Active")
  $('#experiencez').addClass("Active")
  $('#educationz').removeClass("Active")

  $('#skills').removeClass("Active-Link")
  $('#experience').addClass("Active-Link")
  $('#education').removeClass("Active-Link")

  $("li.Active-Link").animate({ left: '3%' }, 200);
  $("li.Active-Link").animate({ left: '0%' }, 500);

  $("#skillsz").animate({ left: '10%', opacity: 0 }, 0);
  $("#experiencez").animate({ left: '0%', opacity: 1 }, 600);
  $("#educationz").animate({ left: '10%', opacity: 0 }, 0);
})

$('#education').on('click', function () {
  $('#skillsz').removeClass("Active")
  $('#experiencez').removeClass("Active")
  $('#educationz').addClass("Active")

  $('#skills').removeClass("Active-Link")
  $('#experience').removeClass("Active-Link")
  $('#education').addClass("Active-Link")

  $("li.Active-Link").animate({ left: '3%' }, 200);
  $("li.Active-Link").animate({ left: '0%' }, 500);

  $("#skillsz").animate({ left: '10%', opacity: 0 }, 0);
  $("#experiencez").animate({ left: '10%', opacity: 0 }, 0);
  $("#educationz").animate({ left: '0%', opacity: 1 }, 600);
})


// SCRIPT FOR GETTING DATA FROM FORM TO GOOGLE SHEETS

// const ENV ==> Cann't Share Due To Security Reasons
const scriptURL = ENV
const form = document.forms['submit-to-google-sheet']
let SendSuccessMsg = document.getElementById("FormMsg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      SendSuccessMsg.innerHTML = "Thanks ❤ <br>Your Messgae Sent Succcessfully."
      setTimeout(() => {
        $("#FormMsg").fadeOut();
      }, 5000);
      form.reset();
    })
    .catch(error => {
      SendSuccessMsg.innerHTML = "Failed ⚠<Br>Please Try Again."
      setTimeout(() => {
        $("#FormMsg").fadeOut();
      }, 5000);
    })
})


// HANDELLING HAMBURGER
function Cross(){
  document.getElementById("Cross").style.WebkitTransitionDuration='0.3s';
  document.getElementById("Cross").style.webkitTransform = 'rotate(360deg)';
  document.getElementById("Hamburger").style.webkitTransform = 'rotate(0deg)';
  document.getElementById("SlidingMenu").style.right = "-250px";
}
function Hamburger(){
  document.getElementById("Hamburger").style.WebkitTransitionDuration='0.3s';
  document.getElementById("Hamburger").style.webkitTransform = 'rotate(360deg)';
  document.getElementById("Cross").style.webkitTransform = 'rotate(0deg)';
  document.getElementById("SlidingMenu").style.right = "0";
}