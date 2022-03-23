var currentTab = 0;
document.addEventListener("DOMContentLoaded", function (event) {
  showTab(currentTab);
});

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML =
      '<i class="fa fa-angle-double-right"></i>';
  } else {
    document.getElementById("nextBtn").innerHTML =
      '<i class="fa fa-angle-double-right"></i>';
  }
  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("nextprevious").style.display = "none";
    document.getElementById("all-steps").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("text-message").style.display = "block";
  }
  showTab(currentTab);
}

function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    console.log(y[i].value);
    if (y[i].value == "" && !y[i].className.includes("optional")) {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}
function fixStepIndicator(n) {
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

function showGenre(item) {
  document.getElementById("dropdownMenu1").innerHTML = item.innerHTML;
}

function lettersOnly(input) {
  var regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, "");
}

function addressCheck(input) {
  var regex = /^([a-zäöüß]+(([.] )|( )|([-])))+[1-9][0-9]{0,3}[a-z]?$/gi;
  console.log(regex.test(input.value));
  console.log(regex.test(input.value));
  console.log(input.value);
  if (!regex.test(input.value)) {
    console.log("change");
    input.value = "";
  }
}

function phoneCheck(input) {
  var regex =
    /^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/;
  if (!regex.test(input.value)) {
    console.log("change");
    input.value = "+49";
  }
}

function emailCheck(input) {
  var regex =
    /^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/;
  if (!regex.test(input.value)) {
    console.log("change");
    input.value = "+49";
  }
}
