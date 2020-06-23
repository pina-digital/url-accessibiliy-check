function addItem2() {
  var resElement = document.getElementById("body");
  var theDiv = document.createElement("div");
  var textURL = document.getElementById("theURL").value;
  var textURL1 = document.createTextNode(textURL);
  theDiv.appendChild(textURL1);
  resElement.appendChild(theDiv);
  if (document.getElementById("checkUrl").length === 0) {
    document.getElementById("checkButton").disabled = true;
  } else {
    document.getElementById("checkButton").disabled = false;
  }
}

function addItem() {
  document.getElementById("list").innerHTML += "<li>Tomato</li>";
}

function success() {
  if (document.getElementById("checkUrl").length === 0) {
    document.getElementById("checkButton").disabled = true;
  } else {
    document.getElementById("checkButton").disabled = false;
  }
}

function addItem3() {
  
  var theurl = document.getElementById('checkUrl').value;
  alert(theurl);

  var element = document.getElementById("theloader");
  element.classList.add("line-scale");

  
  // check if not empty
  //check format
  checkurl(theurl);
}