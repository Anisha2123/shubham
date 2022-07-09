
//function section in Javascript and Jquery...

function myFunction() {
  var x = document.getElementById("mybox1");
  if (x.className === "box1") {
    x.className += " responsive";
  } else {
    x.className = "box1";
  }
}