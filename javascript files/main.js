function scrollWin(value) {
  document.getElementById("leftside").scrollTo(0, value);
}
function openDiv() {
  console.log("clicked");
  var x = document.getElementById("sidenav");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
