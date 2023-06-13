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
const scriptURL = 'ENV HERE';
const form = document.forms['submit-to-google-sheet']
let SendSuccessMsg = document.getElementById("FormMsg")
form.addEventListener('submit', e => {
  e.preventDefault()
  const disableMe = document.getElementById("SubmitBtn");
  disableMe.innerHTML = "Wait Please... ";
  disableMe.style.background = "#440217";
  document.getElementById("GrandParent").style.cursor = "progress";
  disableMe.style.cursor = "not-allowed";
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      SendSuccessMsg.innerHTML = "Thanks ❤ <br>Your Messgae Sent Succcessfully."
      setTimeout(() => {
        $("#FormMsg").fadeOut();
      }, 3000);
      disableMe.innerHTML = "Submit";
      disableMe.style.background = "#ff004f";
      document.getElementById("GrandParent").style.cursor = "default";
      disableMe.style.cursor = "pointer";
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

// RealTime Avalogue Clock 
setInterval(()=>{
	d = new Date();
	htime=d.getHours();
	mtime=d.getMinutes();
	stime=d.getSeconds();

	hRotation = 30*htime + mtime/2;
	mRotation = 6*mtime;
	sRotation = 6*stime;

	hours.style.transform = `rotate(${hRotation}deg)`;
	minutes.style.transform = `rotate(${mRotation}deg)`;
	seconds.style.transform = `rotate(${sRotation}deg)`;

},1000);