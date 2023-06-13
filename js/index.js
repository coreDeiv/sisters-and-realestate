window.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('body');
  body.id = 'sre-home';
});

function openTab(event, tabId) {
  var i, tabcontent, tablinks;
  // Hide all tabs
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // delete active class from the button tabs
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // Show content in the tab selected
  document.getElementById(tabId).style.display = "flex";
  event.currentTarget.className += " active";
}