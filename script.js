function pressButton() {
  var theurl = document.getElementById("checkUrl").value;
  var feedback = document.getElementById("url-feedback");
  // var pattern = /(http[s]?:\/\/)?[^\s(["<,>]\.[^\s[",><]/;

  if (theurl.length === 0) {
    feedback.innerHTML = "נא להזין כתובת אתר אינטרנט";
    feedback.classList.add("show-feedback");
    return false;
  } else if (!urlValidate(theurl)) {
    return false;
  } else {
    var element = document.getElementById("theloader");
    element.classList.add("line-scale");
    feedback.innerHTML = "";
    feedback.classList.remove("show-feedback");

    checkurl(theurl);
  }
  return true;
}

function urlValidate(theurl) {
  // var url = document.getElementById("checkUrl").value;
  var feedback = document.getElementById("url-feedback");

  var pattern = /(http[s]?:\/\/)?[^\s(["<,>]\.[^\s[",><]/;
  if (pattern.test(theurl)) {
    feedback.innerHTML = "הכתובת שהוזנה הינה כתובת חוקית";
    feedback.classList.add("show-feedback");
    return true;
  }
  feedback.innerHTML = "הכתובת שהוזנה אינה כתובת חוקית";
  feedback.classList.add("show-feedback");
  return false;
}
